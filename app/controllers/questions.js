import Ember from 'ember';

export default Ember.Controller.extend({



/*TODO: refactor nav/menu completely to avoid rigged-up CSS hack for smaller screen widths*/
  mobileMenuHidden: true, //hides mobile menu at small screen width, attached to classname on element



// search input value on navigation bar for searchAll action on 'questions' route
  // searchTerm: '',


  actions: {
    toggleMobileMenu() {
      this.toggleProperty('mobileMenuHidden');
    },

    searchAll() {
      // behavior not implemented yet
    },



  }



});
