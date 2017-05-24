import Ember from 'ember';

export default Ember.Controller.extend({


//hides mobile menu at small screen width, attached to classname on element
  mobileMenuHidden: true,

// search input value on navigation bar for searchAll action on 'questions' route
  searchTerm: '',



  actions: {
    toggleMobileMenu() {
      this.toggleProperty('mobileMenuHidden');
    },

    searchAll() {

    },



  }



});
