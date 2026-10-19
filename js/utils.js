// Small helpers, unrelated to the quiz itself

// Returns a copy of the array in random order
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Makes a text safe to insert in HTML (so that a "<" can't break the page)
function escapeHtml(text) {
  const replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(text).replace(/[&<>"']/g, (char) => replacements[char]);
}

// Progress bar as HTML (value out of total).
// With `colored`, the bar is red / yellow / green according to the progress (see progressLevel).
function progressBarHtml(value, total, colored) {
  const percent = total ? (value / total) * 100 : 0;
  const level = colored ? ` ${progressLevel(value, total)}` : '';
  return `<div class="bar${level}"><span style="width: ${percent}%"></span></div>`;
}

// Below this share of mastered questions the progress is red, above it yellow
// (and green once everything is mastered).
const PROGRESS_YELLOW_FROM = 0.5;

// 'low' (red), 'mid' (yellow) or 'done' (green: everything is mastered)
function progressLevel(value, total) {
  if (total > 0 && value === total) return 'done';
  return total > 0 && value / total >= PROGRESS_YELLOW_FROM ? 'mid' : 'low';
}

// Circular progress (SVG) with the percentage in the middle, colored like the bars.
// `label` is read by screen readers; the size is set in CSS (.circle).
function progressCircleHtml(value, total, label) {
  const percent = total ? (value / total) * 100 : 0;
  return `
    <svg class="circle ${progressLevel(value, total)}" viewBox="0 0 36 36" role="img" aria-label="${escapeHtml(label)}">
      <circle class="circle-bg" cx="18" cy="18" r="15.9155"></circle>
      <circle class="circle-fg" cx="18" cy="18" r="15.9155" stroke-dasharray="${percent.toFixed(2)} 100"></circle>
      <text class="circle-text" x="18" y="18">${Math.round(percent)}%</text>
    </svg>
  `;
}

// Copies a text to the clipboard. Resolves to true if it worked.
// The modern Clipboard API needs a secure context (https or localhost),
// so we fall back to the old textarea trick (e.g. when opened from file://).
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fall through to the fallback
  }
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  } catch {
    return false;
  }
}

// Below this share of mastered questions the circle is red, above it yellow
// (and green once everything is mastered).
const CIRCLE_YELLOW_FROM = 0.5;

// Circular progress (SVG) with the percentage in the middle.
// Color: red (low), yellow (in progress), green (everything mastered).
// `label` is read by screen readers; the size is set in CSS (.circle).
function progressCircleHtml(value, total, label) {
  const percent = total ? (value / total) * 100 : 0;
  const level = total > 0 && value === total ? 'done' : percent / 100 >= CIRCLE_YELLOW_FROM ? 'mid' : 'low';
  const cssClass = `circle ${level}`;
  return `
    <svg class="${cssClass}" viewBox="0 0 36 36" role="img" aria-label="${escapeHtml(label)}">
      <circle class="circle-bg" cx="18" cy="18" r="15.9155"></circle>
      <circle class="circle-fg" cx="18" cy="18" r="15.9155" stroke-dasharray="${percent.toFixed(2)} 100"></circle>
      <text class="circle-text" x="18" y="18">${Math.round(percent)}%</text>
    </svg>
  `;
}
