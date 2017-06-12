import Ember from 'ember';

const { set, get } = Ember;

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

setupController(controller, model) {
  // set(controller, 'model', model);
  this._super(...arguments);
  set(controller, 'totalPages', get(model, 'meta.totalPages'));
},


resetController(controller, isExiting) {
  this._super(...arguments);
  if (isExiting) {
    controller.set('sort', '-createdAt');
    controller.set('page', 1);
  }
}


});
