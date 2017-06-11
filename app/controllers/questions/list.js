import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  queryParams: ['sort', 'page'],

  sort: '-createdAt',
  page: 1,


  actions: {
  },

});
