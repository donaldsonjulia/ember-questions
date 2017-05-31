import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  queryParams: ['sort'],

  sort: null,

  sortParams: computed('sort', function() {
    let sort = this.get('sort') || 'createdAt:desc';
    return sort.split(',');
  }),

  sortedQuestions: computed.sort('model', 'sortParams'),

  actions: {
  },

});
