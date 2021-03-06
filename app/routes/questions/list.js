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
  return this.store.query('question', {
    page,
    sort,
    limit,
    include: 'author,answers' //TODO: ask Taras: trying to solve the n+1 query problem, this seems to return all answers in store, not just ones belonging to the questions returned
   });
},

setupController(controller, model) {
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
