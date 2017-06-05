import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({

pageSize: 4,

queryParams: {
  page: {
    refreshModel: true
  },
  sort: {
    refreshModel: true
  }
},

model({ page = 1, sort }) {
  let pageSize = this.get('pageSize');
  let startAt = pageSize * page;
  this.set('startAt', startAt);

  return this.get('store').query('question', {
    limit: pageSize,
    offset: 0,
    sort
  });
},

setupController(controller) {
  this._super(...arguments);
  set(controller, 'startAt', this.get('startAt'));
  set(controller, 'pageSize', this.get('pageSize'));
},


resetController(controller, isExiting) {
  this._super(...arguments);
  if (isExiting) {
    controller.set('sort', null);
  }
}


});
