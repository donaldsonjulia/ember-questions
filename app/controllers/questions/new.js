import Ember from 'ember';

const {
  isEmpty,
  computed
} = Ember;

export default Ember.Controller.extend({
    init() {
      this._super(...arguments);

      this.set('textObj', {
        content: null
      });
    },
  // form input values for createQuestion action on 'questions.new' route
    author: '',
    subject: '',

  // prevents empty form submission by disabling submit button
    questionFormInvalid: computed('author', 'subject', 'textObj.content', function() {
      let author = this.get('author');
      let subject = this.get('subject');
      let content = this.get('textObj.content');

      return isEmpty(author) || isEmpty(subject) || isEmpty(content);
    }),

    actions: {
    }

});
