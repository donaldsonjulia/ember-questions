import Ember from 'ember';

export function answerAmount([length]) {
  if (length === 1) {
    return 'ANSWER';
  } else {
    return 'ANSWERS';
  }
}

export default Ember.Helper.helper(answerAmount);
