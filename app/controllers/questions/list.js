import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  queryParams: ['sort', 'page', 'limit'],

  sort: '-createdAt',
  page: 0,
  limit: 10,

  actions: {
  },

});
