// Checks every question file listed in index.html. Run it from the project root:
//   node quizz/tools/check-questions.js
// It exits with an error code if something is wrong, so it is safe to run after each new course.

const fs = require('fs');
const path = require('path');

const quizDir = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(quizDir, 'index.html'), 'utf8');
const files = [...html.matchAll(/src="(questions\/[^"]+\.js)"/g)].map((m) => m[1]);

global.window = {};
for (const file of files) require(path.join(quizDir, file));

const errors = [];
const warnings = [];
const ids = new Set();
const texts = new Map();
let total = 0;

for (const theme of window.THEMES) {
  if (!theme.shortTitle) errors.push(`${theme.id}: no shortTitle`);
  let multi = 0, single = 0;

  for (const q of theme.questions) {
    total++;
    const where = q.id;
    if (ids.has(q.id)) errors.push(`${where}: duplicate id`);
    ids.add(q.id);
    if (!q.id.startsWith(theme.id + '-')) errors.push(`${where}: id must start with "${theme.id}-"`);
    if (texts.has(q.question)) errors.push(`${where}: same question text as ${texts.get(q.question)}`);
    texts.set(q.question, q.id);
    if (!q.explanation) errors.push(`${where}: no explanation`);
    if (!Array.isArray(q.answers) || q.answers.length < 2) { errors.push(`${where}: needs at least 2 answers`); continue; }
    if (new Set(q.answers).size !== q.answers.length) errors.push(`${where}: duplicated answers`);
    if (!Array.isArray(q.correct) || q.correct.length < 1) { errors.push(`${where}: correct must be a non-empty list`); continue; }
    if (q.correct.some((i) => !Number.isInteger(i) || i < 0 || i >= q.answers.length)) errors.push(`${where}: correct index out of range`);
    if (new Set(q.correct).size !== q.correct.length) errors.push(`${where}: correct has duplicates`);
    if (q.correct.length === q.answers.length) errors.push(`${where}: every answer is correct`);
    // Years from 1500 to 2029 (a decade such as "années 1950" is an approximate date: allowed)
    const withoutDecades = (q.question + ' ' + q.answers.join(' ')).replace(/années \d{4}/g, '');
    if (/\b(1[5-9]\d\d|20[0-2]\d)\b/.test(withoutDecades)) warnings.push(`${where}: contains a year (only approximate dates are wanted)`);

    if (q.correct.length > 1) multi++;
    else single++;
  }

  console.log(`${theme.id.padEnd(12)} ${String(theme.questions.length).padStart(3)} questions (${multi} multi, ${single} single)`);
}

console.log(`total: ${total} questions in ${window.THEMES.length} themes`);
warnings.forEach((w) => console.log('warning:', w));
errors.forEach((e) => console.log('ERROR:', e));
process.exit(errors.length ? 1 : 0);
