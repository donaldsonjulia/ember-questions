import Ember from 'ember';

export default Ember.Controller.extend({

  sortOption: 'Unanswered',

  sortOptions: {
    newest: {
      placeholder: 'Newest',
      params: 'createdAt:desc'
    },
    unanswered: {
      placeholder: 'Unanswered',
      params: 'unanswered:desc,createdAt:desc'
    }
  },

  sortParam: Ember.computed('sortOptions', 'sortOption', function() {
    return this.get('sortOptions')[this.get('sortOption').toLowerCase()].params.split(',');
  }),

  sortedQuestions: Ember.computed.sort('model', 'sortParam'),

  searchTerm: '',

  actions: {
  },

});
