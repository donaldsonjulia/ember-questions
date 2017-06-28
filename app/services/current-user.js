import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP, computed } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  user: computed('_user', 'session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return this.get('_user');
    }
  }),

  load() {
    let userId = this.get('session.data.authenticated.user_id');
    if (!isEmpty(userId)) {
      return this.get('store').findRecord('user', userId).then((user) => {
        this.set('_user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
