import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  search: service(),
  session: service(),

  isShowingNav: false,

  actions: {
    doSearch(searchTerm) {
      this.get('search').doSearch(searchTerm);
    },
    logout() {
      this.get('session').invalidate();
    },
  }
});
