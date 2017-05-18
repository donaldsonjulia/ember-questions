import Ember from 'ember';

export default Ember.Controller.extend({

// form input values for createQuestion action on 'questions.new' route
  author: '',
  subject: '',
  text: '',

// prevents empty form submission by disabling submit button
  questionFormInvalid: Ember.computed.empty('author') && Ember.computed.empty('subject') && Ember.computed.empty('text'),

//hides mobile menu at small screen width, attached to classname on element
  mobileMenuHidden: true,

// search input value on navigation bar for searchAll action
  searchTerm: '',



  actions: {
    toggleMobileMenu() {
      this.toggleProperty('mobileMenuHidden');
    },
    searchAll() {
      let searchTerm = this.get('searchTerm');
      console.log(searchTerm);
    },


  }



});
