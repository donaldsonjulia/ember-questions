import Ember from 'ember';

const {
  isEmpty,
  computed
} = Ember;

export default Ember.Controller.extend({

  init() {
    this._super(...arguments);
    this.set('mobiledocObj', null);
  },


  // form input values for createQuestion action on 'questions.new' route
    author: '',
    subject: '',


  // prevents empty form submission by disabling submit button
    questionFormInvalid: computed('author', 'subject', 'mobiledocObj', function() {
      let author = this.get('author');
      let subject = this.get('subject');
      let content = this.get('mobiledocObj');

      return isEmpty(author) || isEmpty(subject) || isEmpty(content);
    }),

    actions: {
      mobiledocWasUpdated(updatedDoc) {
      this.set('mobiledocObj', updatedDoc);
      },
    }

});
