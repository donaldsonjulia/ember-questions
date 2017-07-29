import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import {
  currentSession,
  invalidateSession,
  authenticateSession
} from 'questions/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | account/profile');

let stubUserObj = {
  username: 'Luli_86',
  name: 'Lucia',
  surname: 'Cammilli',
  email: 'lucia@example.net',
  password: 'lucia123'
};

test('account route should display current user account information', function(assert) {
  // server.create('user', stubUserObj);
  // authenticateSession('this.application', {user_id: 1});
  // visit('/account/profile');

});

test('user should be able to update account information', function(assert) {

});

test('user should be asked to confirm before updating account info', function(assert) {

});

test('user should see indication that revised account info was saved succesfully', function(assert) {

});

test('cannot visit account route without an authenticated session', function(assert) {
  invalidateSession(this.application);
  visit('/account/profile');

  andThen(() => {
    assert.equal(currentURL(), '/login', 'redirects to login page if session is not authenticated');
  });
});
