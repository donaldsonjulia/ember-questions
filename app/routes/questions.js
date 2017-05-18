import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('question');
  },

  resetController(controller) {
      controller.set('mobileMenuHidden', true);
  },

});
