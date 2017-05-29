import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('questions');
  },

  actions: {
    createQuestion() {
      let controller = this.get('controller');
      let author = controller.get('author');
      let subject = controller.get('subject');
      let text = controller.get('textObj.content');

      let newQuestion = this.store.createRecord('question', {
        author: author,
        createdAt: new Date(),
        subject: subject,
        text: text
      });

      newQuestion.save().then(() => {
        controller.set('author', '');
        controller.set('subject', '');
        controller.set('textObj.content', null);

        this.transitionTo('questions.list');
      });
    },

  }

});
