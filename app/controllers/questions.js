import Ember from 'ember';

export default Ember.Controller.extend({

// form inputs for createQuestion action
  author: '',
  subject: '',
  text: '',

  questionFormInvalid: Ember.computed.empty('author') && Ember.computed.empty('subject') && Ember.computed.empty('text'),

});
