import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questions', function() {
    this.route('new');
    this.route('question', {
      path: '/:id'
    });
    this.route('list');
    this.route('search');
  });
  this.route('login');
  this.route('account', function() {
    this.route('profile');
    this.route('my-questions');
    this.route('my-answers');
  });
});

export default Router;
