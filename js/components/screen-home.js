// Home screen: play buttons first, then the progress (one big circle + one colored bar per theme)
// Events emitted: play, train, navigate('confirm')

class ScreenHome extends Screen {
  open() {
    const total = QuestionBank.count();
    const masteredCount = QuestionBank.countMastered();
    const allMastered = masteredCount === total;

    this.innerHTML = `
      <header class="hero">
        <div class="logo">🐕</div>
        <div>
          <h1>Educhien Quizz</h1>
          <p>Révise tes cours d'éducateur canin</p>
        </div>
      </header>

      <!-- Play buttons first, so nobody has to scroll to play -->
      <div class="play-buttons">
        <button class="btn btn-yellow" data-event="play" ${total === 0 ? 'disabled' : ''}>
          ▶ Jouer (10 questions)
          <small>Toutes les questions, seul ou entre amis</small>
        </button>
        <button class="btn btn-outline" data-event="train" ${allMastered ? 'disabled' : ''}>
          S'entraîner
          <small>Uniquement les notions non maîtrisées</small>
        </button>
      </div>

      <div class="card">
        <div class="overall">
          ${progressCircleHtml(masteredCount, total, `Progression globale : ${masteredCount} questions maîtrisées sur ${total}`)}
          <div>
            <h2>Ma progression</h2>
            <p>des questions sont maîtrisées</p>
          </div>
        </div>
        <div class="theme-list">
          ${QuestionBank.themes.map((theme) => this.themeRow(theme)).join('')}
        </div>
      </div>

      <button class="btn btn-link" data-event="navigate" data-screen="confirm">Réinitialiser ma progression</button>
    `;
  }

  // One full-width row: the short name of the theme and its percentage, then its colored bar
  themeRow(theme) {
    const total = QuestionBank.count(theme);
    const masteredCount = QuestionBank.countMastered(theme);
    const percent = total ? Math.round((masteredCount / total) * 100) : 0;
    return `
      <div class="theme-row" title="${escapeHtml(theme.title)} : ${masteredCount} / ${total}">
        <div class="theme-row-head">
          <span class="theme-name">${escapeHtml(theme.shortTitle || theme.title)}</span>
          <span class="theme-percent">${percent}%</span>
        </div>
        ${progressBarHtml(masteredCount, total, true)}
      </div>
    `;
  }
}

customElements.define('screen-home', ScreenHome);
