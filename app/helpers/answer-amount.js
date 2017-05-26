import Ember from 'ember';

export function answerAmount([length]) {

  let answerSuffix = length === 1 ? 'ANSWER' : 'ANSWERS';

  let hasAnswersTemplate = `
    <span class="answers-number">${length}</span><span class="has-answers">${answerSuffix}</span>
    `;

  let noAnswersTemplate = `
    <span class="no-answers">NEEDS ANSWER</span>
  `;

  if (length > 0) {
    return Ember.String.htmlSafe(hasAnswersTemplate);
  }

  else if (length === 0) {
    return Ember.String.htmlSafe(noAnswersTemplate);
  }

}

export default Ember.Helper.helper(answerAmount);
