import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['c-search-bar'],

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
