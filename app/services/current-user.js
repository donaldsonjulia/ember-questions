import Ember from 'ember';

const { inject: { service }, isPresent, RSVP, computed } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  load() {
    let userId = this.get('session.data.authenticated.user_id');
    if (isPresent(userId)) {
      return this.get('store').findRecord('user', userId).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
