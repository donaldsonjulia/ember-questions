import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({

  saveAnswer: task(function * (question, answer) {
    yield answer.save();
    return yield question.save();
  }),

  actions: {
    createAnswer({ question, author, content }) {

      let newAnswer = this.store.createRecord('answer', {
        author,
        content,
        question,
        createdAt: new Date(),
      });

      return this.get('saveAnswer').perform(question, newAnswer);

    }
  }

});
