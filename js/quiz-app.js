// The conductor: listens to the events of the screens
// and decides which screen to show. It draws nothing itself.
//
// Events received:
//   play / train         → starts a series
//   replay               → starts again in the same mode
//   question-passed      → in train mode, saves the question as mastered
//   question-failed      → in play mode, a missed question stops being mastered
//   reset                → forgets every mastered question
//   series-finished      → shows the result (or the trophy if everything is now mastered)
//   share                → copies the link of the current series
//   navigate             → shows the requested screen (e.g. "home")
//
// Also: opening a page with "#q=id1,id2,..." in the URL plays that shared series.

const PLAY_SERIES_SIZE = 10;  // "play" is a series of 10 questions
const TRAIN_BATCH_SIZE = 10;  // "train" is endless: questions are drawn 10 at a time

class QuizApp extends HTMLElement {
  connectedCallback() {
    this.mode = null;   // 'play' or 'train', to be able to replay
    this.series = [];   // questions of the current series, to be able to share it

    this.addEventListener('play', () => this.startSeries('play'));
    this.addEventListener('train', () => this.startSeries('train'));
    this.addEventListener('replay', () => this.startSeries(this.mode));
    this.addEventListener('question-passed', (e) => this.saveIfTraining(e.detail));
    this.addEventListener('question-failed', (e) => this.forgetIfPlaying(e.detail));
    this.addEventListener('reset', () => this.reset());
    this.addEventListener('series-finished', (e) => this.finishSeries(e.detail));
    this.addEventListener('share', () => this.shareSeries());
    this.addEventListener('navigate', (e) => this.show(e.detail));

    window.addEventListener('hashchange', () => this.openSharedSeries());
    if (!this.openSharedSeries()) this.show('home');
  }

  //   - play  → a series of 10 questions drawn from all the questions; passing never saves
  //             anything, but missing a mastered question makes it non-mastered again
  //   - train → endless: questions drawn from the non-mastered ones, 10 at a time, until
  //             everything is mastered (or the player quits); passed ones are saved
  startSeries(mode) {
    if (mode === 'play') {
      this.begin('play', QuestionBank.buildSeries(PLAY_SERIES_SIZE, true));
    } else {
      const drawMore = () => QuestionBank.buildSeries(TRAIN_BATCH_SIZE, false);
      this.begin('train', drawMore(), drawMore);
    }
  }

  // `drawMore` (optional) makes the series endless: it is called to get the next questions
  begin(mode, series, drawMore) {
    if (series.length === 0) return;

    this.mode = mode;
    this.series = series;
    this.show('question', { questions: series, shareable: mode === 'play', drawMore });
  }

  // If the URL holds a shared series, plays it (in play mode). Returns true if it did.
  openSharedSeries() {
    const series = QuestionBank.findByIds(SeriesLink.parseIds(location.hash));
    if (series.length === 0) return false;

    // Remove the "#q=..." from the address bar, so a later reload goes back to the home screen
    history.replaceState(null, '', location.href.split('#')[0]);
    this.begin('play', series);
    return true;
  }

  // Result screen, except when the last non-mastered question was just passed: trophy!
  finishSeries(results) {
    if (this.mode === 'train' && QuestionBank.allMastered()) {
      this.show('end');
    } else {
      this.show('result', { results, shareable: this.mode === 'play', mode: this.mode });
    }
  }

  async shareSeries() {
    const link = SeriesLink.build(this.series);
    if (await copyToClipboard(link)) {
      this.toast('Lien copié ! Envoie-le à tes amis');
    } else {
      window.prompt('Copie ce lien pour le partager :', link);
    }
  }

  // Small message at the bottom of the screen, hidden after 2.5 seconds
  toast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
  }

  // Saved right away (not at the end) so nothing is lost if the user quits mid-series
  saveIfTraining(question) {
    if (this.mode === 'train') QuestionBank.markMastered(question);
  }

  // A mastered question that is missed in play mode goes back to "to learn"
  forgetIfPlaying(question) {
    if (this.mode === 'play') QuestionBank.unmarkMastered(question);
  }

  reset() {
    QuestionBank.reset();
    this.show('home');
  }

  // Shows one screen only (the others are hidden) and hands it its data
  show(name, data) {
    for (const screen of this.children) {
      screen.classList.toggle('active', screen.id === name);
    }
    this.querySelector('#' + name).open(data);
    window.scrollTo(0, 0);
  }
}

customElements.define('quiz-app', QuizApp);
