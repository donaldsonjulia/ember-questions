import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  sortOption: 'unanswered',

  sortOptions: computed(function() {
    return [
      {
        id: 'newest',
        placeholder: 'Newest',
        params: ['createdAt:desc']
      },
      {
        id: 'unanswered',
        placeholder: 'Unanswered',
        params: ['unanswered:desc', 'createdAt:desc']
      }
    ];
  }),

  currentOption: computed('sortOptions.@each.id', 'sortOption', function() {
    let sortOptions = this.get('sortOptions');
    let sortOption = this.get('sortOption');

    return sortOptions.findBy('id', sortOption);
  }),

  sortParam: computed.readOnly('currentOption.params'),

  sortedQuestions: computed.sort('model', 'sortParam'),

  searchTerm: '',

  actions: {
  },

});
