import Ember from 'ember';

const {
  isEmpty,
  computed,
  inject: { service }
} = Ember;

export default Ember.Controller.extend({

  session: service('session'),

  init() {
    this._super(...arguments);
    this.set('mobiledocObj', null);
  },

  // form input values for createQuestion action on 'questions.new' route
    subject: '',


  // prevents empty form submission by disabling submit button
    questionFormInvalid: computed('subject', 'mobiledocObj', function() {
      let subject = this.get('subject');
      let content = this.get('mobiledocObj');

      return isEmpty(subject) || isEmpty(content);
    }),

    actions: {
      mobiledocWasUpdated(updatedDoc) {
      this.set('mobiledocObj', updatedDoc);
      },
    }

});
