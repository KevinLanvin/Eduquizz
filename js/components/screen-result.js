// Result screen: score, per-theme details, then the explained mistakes.
// Receives { results, shareable, mode } in open().
// Events emitted: replay, share, navigate('home')

class ScreenResult extends Screen {
  open({ results, shareable, mode }) {
    const total = results.length;
    const passed = results.filter((r) => r.ok).length;
    const mistakes = results.filter((r) => !r.ok);

    this.innerHTML = `
      <div class="score-circle"><strong>${passed}</strong><span>/ ${total}</span></div>
      <h2>${this.message(passed / total)}</h2>
      <p>Tu as réussi ${passed} question${passed > 1 ? 's' : ''} sur ${total}.</p>

      <div class="card theme-details">
        ${QuestionBank.themes.map((theme) => this.themeRow(theme, results)).join('')}
      </div>

      ${mistakes.length > 0 ? this.mistakesBlock(mistakes) : ''}

      <div class="actions">
        <button class="btn btn-yellow" data-event="replay">${mode === 'train' ? 'Continuer à s\'entraîner' : 'Rejouer une série'}</button>
        ${shareable ? '<button class="btn btn-outline" data-event="share">🔗 Partager cette série</button>' : ''}
        <button class="btn btn-outline" data-event="navigate" data-screen="home">Retour à l'accueil</button>
      </div>
    `;
  }

  message(ratio) {
    if (ratio >= 0.9) return 'Excellent !';
    if (ratio >= 0.7) return 'Bien joué !';
    if (ratio >= 0.5) return 'Pas mal, continue !';
    return 'Courage, ça va venir !';
  }

  // "Origines et domestication — 8 / 10" (empty if no question of this theme in the series)
  themeRow(theme, results) {
    const ofTheme = results.filter((r) => r.question.theme === theme);
    if (ofTheme.length === 0) return '';
    const passed = ofTheme.filter((r) => r.ok).length;
    return `<div class="row"><span>${escapeHtml(theme.title)}</span><b>${passed} / ${ofTheme.length}</b></div>`;
  }

  // A label followed by the texts of the answers at the given indexes
  answerList(cssClass, label, question, indexes) {
    return `
      <div class="${cssClass}">
        <b>${label}</b>
        <ul>${indexes.map((i) => `<li>${escapeHtml(question.answers[i])}</li>`).join('')}</ul>
      </div>
    `;
  }

  // The "À revoir" list: mistakes only, with the correct answer and the explanation
  mistakesBlock(mistakes) {
    return `
      <h2 class="mistakes-title">À revoir (${mistakes.length})</h2>
      ${mistakes.map((r) => `
        <div class="card mistake">
          <p class="m-theme">${escapeHtml(r.question.theme.title)}</p>
          <p class="m-question">${escapeHtml(r.question.question)}</p>
          ${this.answerList('m-yours', r.choices.length > 1 ? '✗ Tes réponses :' : '✗ Ta réponse :', r.question, r.choices)}
          ${this.answerList('m-correct', r.question.correct.length > 1 ? '✓ Bonnes réponses :' : '✓ Bonne réponse :', r.question, r.question.correct)}
          <p class="m-explanation">${escapeHtml(r.question.explanation)}</p>
        </div>
      `).join('')}
    `;
  }
}

customElements.define('screen-result', ScreenResult);
