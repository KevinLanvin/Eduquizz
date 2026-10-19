#!/usr/bin/env node
// Builds the minimal version to put online. Run it from the project root:
//   node quizz/tools/build.js
// The result is in quizz/dist/ : upload ONLY that folder.
//
// What it does:
//   1. checks the questions (tools/check-questions.js): a broken question stops the build
//   2. merges all the scripts of index.html (questions + app) into ONE minified file
//   3. minifies the CSS and the HTML
//   4. keeps only the font files that the app really needs
//   5. adds a content hash to the file names (a new deployment is never served from a stale cache)
//
// Minification uses esbuild, downloaded on the fly by npx (the build tool only: the deployed
// site has no dependency and works offline). Without network, a simple built-in minifier is used.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const kb = (bytes) => (bytes / 1024).toFixed(1) + ' KB';
const gzipSize = (text) => zlib.gzipSync(text).length;
const hash = (text) => crypto.createHash('md5').update(text).digest('hex').slice(0, 8);

// ---------- 1. check the questions ----------
console.log('Checking the questions...');
try {
  execFileSync('node', [path.join(__dirname, 'check-questions.js')], { stdio: 'inherit' });
} catch {
  console.error('\nBuild stopped: fix the questions above first.');
  process.exit(1);
}

// ---------- 2. merge the scripts ----------
const html = read('index.html');
const scriptFiles = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const sources = scriptFiles.map((file) => read(file));
const jsSource = sources.join('\n');

// ---------- minifiers ----------
let usedFallback = false;

function minifyWithEsbuild(code, loader) {
  return execFileSync('npx', ['-y', 'esbuild', `--loader=${loader}`, '--minify', '--legal-comments=none', '--charset=utf8'], {
    input: code,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    maxBuffer: 64 * 1024 * 1024,
  });
}

// Very conservative fallback (used only when esbuild cannot be downloaded)
function minifyFallback(code, loader) {
  if (loader === 'css') {
    return code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};:,>])\s*/g, '$1').trim();
  }
  return code
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '' && !line.startsWith('//'))
    .join('\n');
}

function minify(code, loader) {
  try {
    if (process.env.BUILD_BASIC_MINIFIER) throw new Error('basic minifier forced'); // to test the fallback
    return minifyWithEsbuild(code, loader);
  } catch {
    if (!usedFallback) console.warn('warning: esbuild unavailable (no network?), using the basic built-in minifier');
    usedFallback = true;
    return minifyFallback(code, loader);
  }
}

console.log('Minifying...');
const jsMin = minify(jsSource, 'js');

// ---------- 4. keep only the fonts the app needs ----------
let css = read('style.css');
const usedChars = new Set([...(html + jsSource)].map((c) => c.codePointAt(0)));

function parseRanges(rangeText) {
  return rangeText.split(',').map((part) => {
    const m = part.trim().match(/^U\+([0-9A-Fa-f]+)(?:-([0-9A-Fa-f]+))?$/);
    if (!m) return null;
    const from = parseInt(m[1], 16);
    return [from, m[2] ? parseInt(m[2], 16) : from];
  }).filter(Boolean);
}
const covers = (ranges, cp) => ranges.some(([from, to]) => cp >= from && cp <= to);

// When two @font-face rules cover the same character, the LAST one wins: a font file is needed only
// if some used character is in its range and not already covered by a font declared after it.
const fontFaces = [...css.matchAll(/@font-face\s*\{[^}]*\}\s*/g)].map((m) => ({
  block: m[0],
  file: (m[0].match(/url\('?([^')]+)'?\)/) || [])[1],
  ranges: parseRanges((m[0].match(/unicode-range:\s*([^;]+);/) || [])[1] || ''),
}));

const keptFonts = [];
fontFaces.forEach((face, i) => {
  const later = fontFaces.slice(i + 1);
  const needed = face.ranges.length === 0 || [...usedChars].some(
    (cp) => covers(face.ranges, cp) && !later.some((other) => covers(other.ranges, cp))
  );
  if (needed && face.file) keptFonts.push(face.file);
  else css = css.replace(face.block, '');
});

const cssMin = minify(css, 'css');

// ---------- 5. write dist/ with hashed names ----------
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'fonts'), { recursive: true });

const jsName = `app.${hash(jsMin)}.js`;
const cssName = `style.${hash(cssMin)}.css`;
fs.writeFileSync(path.join(dist, jsName), jsMin);
fs.writeFileSync(path.join(dist, cssName), cssMin);
for (const font of keptFonts) fs.copyFileSync(path.join(root, font), path.join(dist, font));

// index.html: one stylesheet, one script, no comments, no extra spaces
const scriptsBlock = /(?:\s*<script src="[^"]+"><\/script>)+/;
let htmlOut = html
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace('<link rel="stylesheet" href="style.css">', `<link rel="stylesheet" href="${cssName}">`)
  .replace(scriptsBlock, `<script src="${jsName}"></script>`);
// remove the preload of a font file that was not kept
htmlOut = htmlOut.replace(/<link rel="preload" href="([^"]+)"[^>]*>\s*/g, (tag, href) => (keptFonts.includes(href) ? tag : ''));
htmlOut = htmlOut.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').trim();
fs.writeFileSync(path.join(dist, 'index.html'), htmlOut);

// ---------- report ----------
const sourceCss = read('style.css');
const before = html.length + sourceCss.length + jsSource.length;
const after = htmlOut.length + cssMin.length + jsMin.length;
console.log(`
dist/ is ready (${scriptFiles.length} scripts merged into 1):
  index.html   ${kb(htmlOut.length)}
  ${jsName.padEnd(18)} ${kb(jsMin.length)}  (${kb(gzipSize(jsMin))} gzipped)
  ${cssName.padEnd(18)} ${kb(cssMin.length)}  (${kb(gzipSize(cssMin))} gzipped)
  fonts        ${keptFonts.map((f) => path.basename(f)).join(', ')}
code: ${kb(before)} -> ${kb(after)} (${Math.round((1 - after / before) * 100)} % smaller), tools and the other font files left out`);
