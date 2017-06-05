import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  queryParams: ['sort', 'page'],

  sort: null,
  page: null,

  sortParams: computed('sort', function() {
    let sort = this.get('sort') || '-createdAt';
    return sort.split(',');
  }),

  actions: {
  },

});
