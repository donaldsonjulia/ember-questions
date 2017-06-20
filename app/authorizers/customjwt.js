import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const {
  inject: { service }
} = Ember;

export default Base.extend({
  session: service(),

  authorize(data, block) {
    let { token } = data;
    if (this.get('session.isAuthenticated') && token) {
      block('Authorization', `Bearer ${token}`);
    }
  }
});
