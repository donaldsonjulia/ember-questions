import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  currentPage: 1,
  totalPages: 1,

  pages: computed('totalPages', function() {
    let emptyPages = new Array(this.get('totalPages')).fill(1);
    let numberedPages = emptyPages.map((item, index) => {
      return index + 1;
    });
    return numberedPages;
  }),

  hasPrev: computed('currentPage', function() {
    return this.get('currentPage') > 1;
  }),
  hasNext: computed('currentPage', 'totalPages', function() {
    return this.get('currentPage') < this.get('totalPages');
  }),

  prevPage: computed('hasPrev', 'currentPage', function() {
    if (this.get('hasPrev')) {
      return this.get('currentPage') - 1;
    }
  }),

  nextPage: computed('hasNext', 'currentPage', function() {
    if (this.get('hasNext')) {
      return this.get('currentPage') + 1;
    }
  }),


});
