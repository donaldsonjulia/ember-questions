import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let currentUserId = this.get('currentUser.user.id');
    // return this.store.query('question', {
    //   filter: { author: currentUserId }
    // });
    return this.store.findRecord('user', currentUserId, { include: 'questions' });
  }

});
