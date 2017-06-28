import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createQuestion() {
      let controller = this.get('controller');
      let author = this.get('currentUser').user;
      let subject = controller.get('subject');
      let content = JSON.stringify(controller.get('mobiledocObj'));

      let newQuestion = this.store.createRecord('question', {
        author,
        createdAt: new Date(),
        subject,
        content
      });

      newQuestion.save().then(() => {

        controller.set('subject', '');
        controller.set('mobiledocObj', null);

        this.transitionTo('questions.list');
      });
    },

  }

});
