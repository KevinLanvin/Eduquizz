// Screen shown when ALL the questions are mastered.
// Events emitted: navigate('confirm'), navigate('home')

const CONFETTI_COUNT = 40;
const CONFETTI_COLORS = ['#ffda10', '#6f9929', '#40d9f1', '#ffffff'];

class ScreenEnd extends Screen {
  open() {
    this.innerHTML = `
      <div class="confetti-box" aria-hidden="true">${this.confettiHtml()}</div>
      <div class="party">🏆</div>
      <h2>Bravo, tu as tout réussi !</h2>
      <p>Les ${QuestionBank.count()} questions sont maîtrisées. Tu peux tout réinitialiser pour recommencer.</p>

      <div class="actions">
        <button class="btn btn-yellow" data-event="navigate" data-screen="confirm">Tout réinitialiser</button>
        <button class="btn btn-link" data-event="navigate" data-screen="home">Retour à l'accueil</button>
      </div>
    `;
  }

  // Pure-CSS confetti: each piece falls using its own position, delay, size and color
  confettiHtml() {
    let html = '';
    for (let i = 0; i < CONFETTI_COUNT; i++) {
      const style = [
        `left: ${Math.random() * 100}%`,
        `background: ${CONFETTI_COLORS[i % CONFETTI_COLORS.length]}`,
        `animation-delay: ${(Math.random() * 2).toFixed(2)}s`,
        `animation-duration: ${(2.5 + Math.random() * 2).toFixed(2)}s`,
        `width: ${6 + Math.floor(Math.random() * 6)}px`,
        `height: ${10 + Math.floor(Math.random() * 8)}px`,
      ].join('; ');
      html += `<i style="${style}"></i>`;
    }
    return html;
  }
}

customElements.define('screen-end', ScreenEnd);
