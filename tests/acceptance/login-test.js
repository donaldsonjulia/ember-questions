import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import {
  currentSession,
  invalidateSession,
  authenticateSession
} from 'questions/tests/helpers/ember-simple-auth';


moduleForAcceptance('Acceptance | login', {
  afterEach() {
    server.shutdown();
  }
});

test('if user is not logged in, they see a login form', function(assert) {
  invalidateSession(this.application);
  visit('/login');
  andThen(() => {
    let loginFormExists = find(testSelector('login-form')).length > 0 ? true : false;
    assert.equal(loginFormExists, true);
  });
});

test('if user is logged in, they see a link to logout', function(assert) {
  authenticateSession(this.application);
  visit('/login');
  andThen(() => {
    let logoutLinkExists = find(testSelector('logout-link')).length > 0 ? true : false;
    let headerLogoutLinkExists = find(testSelector('header-logout-link')).length > 0 ? true : false;

    assert.equal(logoutLinkExists, true);
    assert.equal(headerLogoutLinkExists, true);
  });
});

test('if user is logged in, the alert tells them who they are logged-in as', function(assert) {
  server.create('user', { username: 'Lucia123'});
  authenticateSession(this.application, {user_id: 1});
  visit('/login');
  pauseTest();
  andThen(() => {
    let currentUsernameDisplayed = find(testSelector('current-username')).text.trim();
    assert.equal(currentUsernameDisplayed, 'Lucia123');
  });
});


test('user can login', function(assert) {

});

test('user can logout', function(assert) {

});

test('if user inputs incorrect credentials, they see error message', function(assert) {

});
