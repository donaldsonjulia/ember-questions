import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createAnswer(params) {
      let question = params.question;
      let author = params.author;
      let text = params.text;

      let newAnswer = this.store.createRecord('answer', {
        author: author,
        createdAt: new Date(),
        text: text,
        question: question
      });

      newAnswer.save().then(() => {
        return question.save();
      });
    }
  }

});
