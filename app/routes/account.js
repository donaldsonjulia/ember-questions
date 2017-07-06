import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

model() {
  let currentUserId = this.get('currentUser.user.id');
  return this.store.findRecord('user', currentUserId, { include:'questions,answers' });
}



});
