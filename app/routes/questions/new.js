import Ember from 'ember';

// const { inject: { service } } = Ember;

export default Ember.Route.extend({

  // session: service('session'),

  actions: {
    createQuestion() {
      let controller = this.get('controller');
      let author = controller.get('author');
      let subject = controller.get('subject');
      let content = JSON.stringify(controller.get('mobiledocObj'));

      let newQuestion = this.store.createRecord('question', {
        author: author,
        createdAt: new Date(),
        subject: subject,
        content: content
      });

      newQuestion.save().then(() => {
        debugger;
        controller.set('author', '');
        controller.set('subject', '');
        controller.set('mobiledocObj', null);

        this.transitionTo('questions.list');
      });
    },

  }

});
