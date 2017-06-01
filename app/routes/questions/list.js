import Ember from 'ember';

export default Ember.Route.extend({

model() {
  return this.store.findAll('question');
},


resetController(controller, isExiting, transition) {
  if (isExiting) {
    controller.set('sort', null);
  }
}


});
