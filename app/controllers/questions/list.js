import Ember from 'ember';

export default Ember.Controller.extend({
  sortParam: 'Unanswered',
  sortParams: Ember.String.w('Newest Unanswered'),

  actions: {
    /***** selectParam action is removed because {{action (mut sortParam)}} handles it for us *****/
    // selectParam(param) {
    //   this.set('sortParam', param);
    // },
  }
});
