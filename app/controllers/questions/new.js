import Ember from 'ember';

export default Ember.Controller.extend({
  // form input values for createQuestion action on 'questions.new' route
    author: '',
    subject: '',
    text: '',

  // simditor model
    textObj: {
      content: null
    },

  // prevents empty form submission by disabling submit button
    questionFormInvalid: Ember.computed.empty('author') && Ember.computed.empty('subject') && Ember.computed.empty('textObj.content'),

    actions: {
      valuechanged() {
        //action when text editor changes
      },
    }

});
