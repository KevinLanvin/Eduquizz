// Asks for confirmation before forgetting the passed questions
// Events emitted: reset, navigate('home')

class ScreenConfirm extends Screen {
  open() {
    this.innerHTML = `
      <div class="card">
        <h2>Réinitialiser ?</h2>
        <p>Toutes les questions réussies seront oubliées et pourront être reproposées.</p>
        <div class="actions">
          <button class="btn btn-green" data-event="reset">Oui, réinitialiser</button>
          <button class="btn btn-outline" data-event="navigate" data-screen="home">Annuler</button>
        </div>
      </div>
    `;
  }
}

customElements.define('screen-confirm', ScreenConfirm);
