import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({

queryParams: {
  sort: {
    refreshModel: true
  },
  page: {
    refreshModel: true
  },
  limit: {
    refreshModel: true
  }
},

model({ page, sort, limit }) {
  return this.get('store').query('question', {
    page,
    sort,
    limit
   });
},


resetController(controller, isExiting) {
  this._super(...arguments);
  if (isExiting) {
    controller.set('sort', '-createdAt');
    controller.set('page', 0);
  }
}


});
