import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('question');
  },

  /*TODO: refactor nav/menu completely to avoid rigged-up CSS hack for smaller screen widths*/
  
  resetController(controller) {
      controller.set('mobileMenuHidden', true);
  },

  actions: {
    searchAll() {
      let searchTerm = this.get('controller').get('searchTerm');

    },
    willTransition() {
      this.get('controller').set('mobileMenuHidden', true);
    },
  }



});
