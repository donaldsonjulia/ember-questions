import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('questions.list', { queryParams: { sort: 'createdAt:desc'}});
  }
});
