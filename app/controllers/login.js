import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
    authenticate: task(function * (identification, password) {
        yield this.get('session').authenticate('authenticator:customjwt', { identification, password });
        yield this.get('currentUser').load();
        this.transitionToRoute('questions');
    }),

    actions: {
        logout() {
            this.get('session').invalidate();
        }
    }
});
