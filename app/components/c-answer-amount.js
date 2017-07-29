import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  amount: null, //integer to be passed in when calling component, using question.answers.length for a given question

  hasNoAnswers: computed('amount', function() {
    return this.get('amount') === 0;
  }),

  answerSuffix: computed('amount', function() {
    return this.get('amount') === 1 ? 'ANSWER' : 'ANSWERS'
  }),






});
