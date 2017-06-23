import Ember from 'ember';

const {
  inject: { service }
} = Ember;


export default Ember.Route.extend({

currentUser: service(),

model() {
  let currentUserId = this.get('currentUser').user.id;
  return this.store.findRecord('user', currentUserId, { include:'questions,answers' });
}



});
