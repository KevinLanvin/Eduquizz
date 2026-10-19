// Question screen: goes through a series of questions, one by one.
// Each question is a multiple-choice question: the player selects ONE OR SEVERAL answers,
// presses "Valider", then "Question suivante".
// Receives { questions, shareable, drawMore } in open():
//   - questions: the series to play
//   - shareable: whether to show the share button
//   - drawMore:  optional function returning more questions; when given, the series is endless
//                (it only ends when drawMore() returns nothing, or when the player quits)
// Events emitted: question-passed(question), question-failed(question), share,
//                 series-finished(results), navigate('home')

class ScreenQuestion extends Screen {
  // Starts a new series
  open({ questions, shareable, drawMore }) {
    this.questions = [...questions];
    this.shareable = shareable;
    this.drawMore = drawMore;
    this.index = 0;     // position of the current question
    this.results = [];  // one entry per answered question: { question, ok, choices }
    this.showQuestion();
  }

  get question() {
    return this.questions[this.index];
  }

  // An endless series never knows its last question in advance
  get isLast() {
    return !this.drawMore && this.index === this.questions.length - 1;
  }

  // Draws the current question with its shuffled answers
  showQuestion() {
    const q = this.question;
    const total = this.questions.length;

    this.selected = new Set(); // original indexes of the selected answers
    this.validated = false;    // true once "Valider" was pressed

    // Answers are shuffled but keep their original position (i),
    // so we can still tell which ones are correct
    const answers = shuffle(q.answers.map((text, i) => ({ text, i })));

    // Fixed series: "Question 3 / 10 · Score : 2 / 2" (passed / answered so far) + progress through the series.
    // Endless series: no total, a percentage (a big "12 / 190" would discourage players)
    // and a bar show how much is mastered overall.
    const score = this.results.filter((r) => r.ok).length;
    const scoreText = this.results.length > 0 ? ` · Score : ${score} / ${this.results.length}` : ''; // hidden until a first answer
    const counter = this.drawMore
      ? `Question ${this.index + 1} · ${Math.round((QuestionBank.countMastered() / QuestionBank.count()) * 100)} % maîtrisé`
      : `Question ${this.index + 1} / ${total}${scoreText}`;
    const bar = this.drawMore
      ? progressBarHtml(QuestionBank.countMastered(), QuestionBank.count())
      : progressBarHtml(this.index, total);

    this.innerHTML = `
      <div class="q-head">
        <span>${counter}</span>
        <div>
          ${this.shareable ? '<button class="share" data-event="share" aria-label="Partager la partie">🔗</button>' : ''}
          <button class="quit" aria-label="Quitter">✕</button>
        </div>
      </div>
      <div style="margin-top: 10px">${bar}</div>
      <div><span class="tag">${escapeHtml(q.theme.title)}</span></div>

      <h2 class="question">${escapeHtml(q.question)}</h2>
      <p class="hint">Une ou plusieurs réponses possibles</p>
      <div class="answers" role="group" aria-label="Réponses">
        ${answers.map((answer, position) => `
          <button class="answer" role="checkbox" aria-checked="false" data-i="${answer.i}">
            <span class="letter">${String.fromCharCode(65 + position)}</span>
            <span>${escapeHtml(answer.text)}</span>
          </button>
        `).join('')}
      </div>

      <!-- Both buttons are always there: "Valider" never turns into "Suivant",
           so a double tap can never skip a question -->
      <div class="actions">
        <button class="btn btn-green" id="btn-validate" disabled>Valider</button>
        <button class="btn btn-outline" id="btn-next" disabled>
          ${this.isLast ? 'Voir mon résultat' : 'Question suivante →'}
        </button>
      </div>
    `;

    this.querySelector('.quit').onclick = () => this.quit();
    this.querySelector('#btn-validate').onclick = () => this.validate();
    this.querySelector('#btn-next').onclick = () => this.next();
    this.querySelectorAll('.answer').forEach((button) => {
      button.onclick = () => this.toggle(Number(button.dataset.i), button);
    });
  }

  // Selects / unselects an answer (before validation only)
  toggle(i, button) {
    if (this.validated) return;

    if (this.selected.has(i)) this.selected.delete(i);
    else this.selected.add(i);

    const isSelected = this.selected.has(i);
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-checked', isSelected);
    this.querySelector('#btn-validate').disabled = this.selected.size === 0;
  }

  // The player pressed "Valider": the question is passed only if the selection
  // is exactly the set of correct answers
  validate() {
    if (this.validated || this.selected.size === 0) return;
    this.validated = true;

    const q = this.question;
    const ok = q.correct.length === this.selected.size && q.correct.every((i) => this.selected.has(i));
    this.results.push({ question: q, ok, choices: [...this.selected] });
    this.emit(ok ? 'question-passed' : 'question-failed', q);

    // Lock the answers and color them:
    //   correct = right answer selected, wrong = wrong answer selected,
    //   missed = right answer that was not selected (dashed green)
    this.querySelector('.answers').classList.add('locked');
    this.querySelectorAll('.answer').forEach((button) => {
      const i = Number(button.dataset.i);
      const isCorrect = q.correct.includes(i);
      const isSelected = this.selected.has(i);
      if (isCorrect && isSelected) button.classList.add('correct');
      else if (isCorrect) button.classList.add('missed');
      else if (isSelected) button.classList.add('wrong');
    });

    this.querySelector('#btn-validate').disabled = true;
    this.querySelector('#btn-next').disabled = false;
  }

  next() {
    if (!this.validated) return;

    // Last question of the list: an endless series asks for more
    if (this.index + 1 >= this.questions.length && this.drawMore) {
      this.questions.push(...this.drawMore());
    }

    if (this.index + 1 >= this.questions.length) {
      this.emit('series-finished', this.results);
    } else {
      this.index++;
      this.showQuestion();
      window.scrollTo(0, 0);
    }
  }

  // Cross at the top right: show the result of what was answered (if anything)
  quit() {
    if (this.results.length > 0) this.emit('series-finished', this.results);
    else this.emit('navigate', 'home');
  }
}

customElements.define('screen-question', ScreenQuestion);
