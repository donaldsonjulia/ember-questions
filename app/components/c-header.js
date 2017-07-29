import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  search: service(),
  session: service(),
  router: service('-routing'),
  currentUser: service(),

  isShowingNav: false,

  actions: {
    doSearch(searchTerm) {
      this.get('search').doSearch(searchTerm);
    },
    logout() {
      this.get('session').invalidate();
      this.get('currentUser').logout();
      this.get('router').transitionTo('login');
    },
  }
});
