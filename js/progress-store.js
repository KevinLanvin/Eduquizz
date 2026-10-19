// Saves the ids of the mastered questions in the browser (localStorage).
// Everything is wrapped in try/catch: if the browser blocks storage
// (private browsing, for instance), the app still works, just without memory.

const ProgressStore = {
  KEY: 'educhien-quizz-mastered',

  // Returns the saved ids (empty list if nothing is saved or on any problem)
  load() {
    try {
      const ids = JSON.parse(localStorage.getItem(this.KEY));
      return Array.isArray(ids) ? ids : [];
    } catch {
      return [];
    }
  },

  save(ids) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify([...ids]));
    } catch {
      // storage unavailable: ignore
    }
  },

  clear() {
    try {
      localStorage.removeItem(this.KEY);
    } catch {
      // storage unavailable: ignore
    }
  },
};
