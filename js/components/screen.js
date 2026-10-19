// Base class of every screen.
//
// A screen = a custom HTML tag (<screen-home>, <screen-question>...).
// Each screen:
//   - draws itself in its open() method (called every time it is shown)
//   - tells the app what happened through events, with emit('name', data)
//
// Shortcut for HTML templates: a button with data-event="play"
// automatically emits the "play" event on click
// (and data-screen="home" provides the event data).

class Screen extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', (e) => {
      const button = e.target.closest('[data-event]');
      if (button) this.emit(button.dataset.event, button.dataset.screen);
    });
  }

  emit(name, data) {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, detail: data }));
  }
}
