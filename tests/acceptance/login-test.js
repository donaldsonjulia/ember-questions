import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import {
  currentSession,
  invalidateSession,
  authenticateSession
} from 'questions/tests/helpers/ember-simple-auth';

const {
  get
} = Ember;


moduleForAcceptance('Acceptance | login', {
  afterEach() {
    server.shutdown();
    invalidateSession(this.application);  //adding this here also to hopefully avoid issues?
  }
});

test('if user is not logged in, they see a login form', function(assert) {
  invalidateSession(this.application);
  visit('/login');
  andThen(() => {
    let loginFormExists = find(testSelector('login-form')).length > 0 ? true : false;
    assert.equal(loginFormExists, true, 'login form displays if user is not logged in');
  });
});

test('if user is logged in, they see a link to logout', function(assert) {
  server.create('user', { username: 'JuliaD'});
  authenticateSession(this.application, {user_id: 1});
  visit('/login');
  andThen(() => {
    let logoutLinkExists = find(testSelector('logout-link')).length > 0 ? true : false;
    let headerLogoutLinkExists = find(testSelector('header-logout-link')).length > 0 ? true : false;
    let loginFormExists = find(testSelector('login-form')).length > 0 ? true : false;

    assert.equal(logoutLinkExists, true, 'logout link exists on page if user is logged in');
    assert.equal(headerLogoutLinkExists, true, 'logout link exists in header if user is logged in');
    assert.equal(loginFormExists, false, 'logged-in user does not see login form');
  });
});

test('if user is logged in, the alert tells them who they are logged-in as', function(assert) {
  server.create('user', { username: 'JuliaD'});
  authenticateSession(this.application, {user_id: 1});
  visit('/login');
  andThen(() => {
    let currentUsernameDisplayed = find(testSelector('current-username')).text().trim();
    assert.equal(currentUsernameDisplayed, 'Currently logged in as JuliaD.', 'page alert shows current username next to logout link');
  });
});


test('user can login', function(assert) {
  server.create('user', { username: 'JuliaD', password: 'test123'});
  invalidateSession(this.application);
  visit('/login');
  fillIn(testSelector('username-input'), 'JuliaD');
  fillIn(testSelector('password-input'), 'test123');
  click(testSelector('login-btn'));

  andThen(() => {
    let session = currentSession(this.application);
    let isAuthenticated = get(session, 'isAuthenticated');
    assert.equal(
      isAuthenticated,
      true,
      'after user submits correct credentials, they are logged in'
    );
  });
});

test('user can logout from login page alert', function(assert) {
  server.create('user', { username: 'JuliaD'});
  authenticateSession(this.application, {user_id: 1});
  visit('/login');
  click(testSelector('logout-link'));

  andThen(() => {
    let session = currentSession(this.application);
    let isAuthenticated = get(session, 'isAuthenticated');
    assert.equal(
      isAuthenticated,
      false,
      'after user clicks logout, they are logged out'
    );
  });

});

test('user can logout from header', function(assert) {
  server.create('user', { username: 'JuliaD'});
  authenticateSession(this.application, {user_id: 1});
  visit('/login');
  click(testSelector('header-logout-link'));

  andThen(() => {
    let session = currentSession(this.application);
    let isAuthenticated = get(session, 'isAuthenticated');
    assert.equal(
      isAuthenticated,
      false,
      'after user clicks logout link in header, they are logged out'
    );
  });

});

test('if user inputs incorrect credentials, they see error message', function(assert) {
  server.create('user', { username: 'JuliaD', password: 'test123' });
  invalidateSession(this.application);
  visit('/login');
  fillIn(testSelector('username-input'), 'JuliaD');
  fillIn(testSelector('password-input'), 'wrongPassword');
  click(testSelector('login-btn'));

  andThen(() => {
    let loginErrorMessageExists = find(testSelector('login-error')).length > 0 ? true : false;
    let loginErrorMessage = find(testSelector('login-error')).text().trim();
    assert.equal(loginErrorMessageExists, true, 'login error flash displays if incorrect credentials');
    assert.equal(loginErrorMessage, 'Invalid username and password.', 'error message displays correctly');
  });

});
