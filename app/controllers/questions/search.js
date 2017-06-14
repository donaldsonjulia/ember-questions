import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  queryParams: [ { search: {as: 'q'} } , 'page', 'limit'],

  search: null,
  page: 1,
  limit: 10,

  searchService: service('search'),

  actions: {
    doSearch(searchTerm) {
      this.get('searchService').doSearch(searchTerm);
    }
  }

});
