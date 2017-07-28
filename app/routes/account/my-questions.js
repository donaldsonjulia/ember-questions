import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let user = this.modelFor('account');
    return this.store.findRecord('user', user.id, { include: 'questions' }); //TODO: ask Taras about problems implementing query filter for questions authored by currentUser
  }

});
