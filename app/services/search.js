import Ember from 'ember';
const { getOwner, computed: { readOnly } } = Ember;

export default Ember.Service.extend({
  _searchTerm: '',
  searchTerm: readOnly('_searchTerm'),

  doSearch(searchTerm) {
    let router = getOwner(this).lookup('router:main');
    this.set('_searchTerm', searchTerm);
    router.transitionTo('questions.search', { queryParams: {
      search: searchTerm
    }});
  },

  setSearchTerm(searchTerm) {
    this.set('_searchTerm', searchTerm);
  }
});
