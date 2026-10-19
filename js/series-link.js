// The share link: the page URL followed by "#q=" and the ids of the questions.
// Example: index.html#q=origins-003,ethology-001,origins-007
// Opening that link plays exactly those questions, in that order.

const SeriesLink = {
  PARAM: 'q',

  // Link for a series (a list of questions)
  build(questions) {
    const ids = questions.map((q) => q.id).join(',');
    return `${location.href.split('#')[0]}#${this.PARAM}=${ids}`;
  },

  // Ids found in a URL hash ("#q=a,b,c"), or an empty list if there is none
  parseIds(hash) {
    const value = new URLSearchParams(hash.replace(/^#/, '')).get(this.PARAM);
    return value ? value.split(',') : [];
  },
};
