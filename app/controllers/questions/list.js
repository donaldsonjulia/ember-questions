import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['sort', 'page', 'limit'],

  sort: '-createdAt',
  page: 1,
  limit: 10,

  actions: {
  },

});
