import Ember from 'ember';
const { computed, isEmpty } = Ember;

export default Ember.Component.extend({

  classNames: ['c-search-bar'],

  formEmpty: computed('localSearchTerm', function() {
    let localSearchTerm = this.get('localSearchTerm');
    return isEmpty(localSearchTerm);
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('localSearchTerm', this.get('searchTerm'));
  },


  actions: {
    submitSearch(searchTerm) {
      this.get('onSubmit')(searchTerm);
    }
  }

});
