import Ember from 'ember';

const { set, get, inject: { service } } = Ember;

export default Ember.Route.extend({

  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },

  searchService: service('search'),

  model({ search, page, limit }) {
    this.get('searchService').setSearchTerm(search);
    return this.get('store').query('question', {
      search,
      page,
      limit
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'totalPages', get(model, 'meta.totalPages'));
  },

  resetController(controller, isExiting) {
    this._super(...arguments);
    if (isExiting) {
      set(controller, 'page', 1);
      this.get('searchService').setSearchTerm('');
    }
  }

});
