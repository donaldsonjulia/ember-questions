import Ember from 'ember';
import { task } from 'ember-concurrency';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  search: service(),
  session: service(),

  isShowingNav: false,

  actions: {
    doSearch(searchTerm) {
      this.get('search').doSearch(searchTerm);
    },
    invalidateSession() {
      this.get('session').invalidate();
    },
  }
});
