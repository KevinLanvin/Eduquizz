// The question bank: knows which questions exist, which ones are mastered,
// and draws the series. No display code here.

const QuestionBank = {
  // Themes come from the files in questions/
  themes: window.THEMES || [],

  // All the questions in one flat list, each one knowing its theme
  questions: [],

  // Ids of the questions passed in "train" mode (saved in localStorage)
  mastered: new Set(ProgressStore.load()),

  isMastered(question) {
    return this.mastered.has(question.id);
  },

  // Remembers that a question was passed, and saves it
  markMastered(question) {
    this.mastered.add(question.id);
    ProgressStore.save(this.mastered);
  },

  // Forgets one mastered question (e.g. it was missed in play mode), and saves
  unmarkMastered(question) {
    if (this.mastered.delete(question.id)) ProgressStore.save(this.mastered);
  },

  // Forgets every mastered question
  reset() {
    this.mastered.clear();
    ProgressStore.clear();
  },

  // Finds questions from their ids, keeping the order of `ids`.
  // Unknown ids (e.g. a question removed since the link was made) are ignored.
  findByIds(ids) {
    return ids.map((id) => this.questions.find((q) => q.id === id)).filter(Boolean);
  },

  // True when there is at least one question and all of them are mastered
  allMastered() {
    return this.count() > 0 && this.countMastered() === this.count();
  },

  // Number of questions (in one theme, or in total if no theme is given)
  count(theme) {
    return this.questions.filter((q) => !theme || q.theme === theme).length;
  },

  // Number of mastered questions (in one theme, or in total if no theme is given)
  countMastered(theme) {
    return this.questions.filter((q) => (!theme || q.theme === theme) && this.isMastered(q)).length;
  },

  // Draws `size` questions spread over ALL themes:
  // one question from a theme, then one from the next, and so on.
  //   - includeMastered = false (train): mastered questions are excluded.
  //     A fully mastered theme has nothing left to give, so it drops out of the draw.
  //   - includeMastered = true (play): every question can be drawn.
  // Returns fewer than `size` questions if there are not enough left.
  buildSeries(size, includeMastered) {
    const candidates = (theme) => this.questions.filter(
      (q) => q.theme === theme && (includeMastered || !this.isMastered(q))
    );
    let piles = shuffle(this.themes)
      .map((theme) => shuffle(candidates(theme)))
      .filter((pile) => pile.length > 0);

    const series = [];
    while (series.length < size && piles.length > 0) {
      for (const pile of piles) {
        if (series.length < size) series.push(pile.pop());
      }
      piles = piles.filter((pile) => pile.length > 0);
    }
    return shuffle(series);
  },
};

// Fill the flat list once at load time
for (const theme of QuestionBank.themes) {
  for (const question of theme.questions) {
    QuestionBank.questions.push({ ...question, theme });
  }
}
