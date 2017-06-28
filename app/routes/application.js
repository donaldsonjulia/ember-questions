import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let currentUserRequest = this.get('currentUser').load()
      .catch(() => this.get('session').invalidate());

    return currentUserRequest;
  }

});
