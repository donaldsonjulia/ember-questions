import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('question');
  },

  resetController(controller) {
      controller.set('mobileMenuHidden', true);
  },

  actions: {
    searchAll() {
      let searchTerm = this.get('controller').get('searchTerm');
      console.log(searchTerm);
    },
    willTransition() {
      this.get('controller').set('mobileMenuHidden', true);
    },
  }



});
