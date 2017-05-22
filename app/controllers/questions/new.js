import Ember from 'ember';

export default Ember.Controller.extend({
  // form input values for createQuestion action on 'questions.new' route
    author: '',
    subject: '',
  // simditor model (textarea form input for createQuestion)
    textObj: {
      content: null
    },

  // prevents empty form submission by disabling submit button
    questionFormInvalid: Ember.computed.empty('author') || Ember.computed.empty('subject') || Ember.computed.empty('textObj.content'),

    actions: {
    }

});
