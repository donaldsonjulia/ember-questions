import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({

queryParams: {
  page: {
    refreshModel: true
  },
  sort: {
    refreshModel: true
  }
},

model({ page, sort }) {
  return this.get('store').query('question', {
    page,
    sort
   });
},


resetController(controller, isExiting) {
  this._super(...arguments);
  if (isExiting) {
    controller.set('sort', '-createdAt');
    controller.set('page', 1);
  }
}


});
