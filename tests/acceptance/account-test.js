import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import {
  currentSession,
  invalidateSession,
  authenticateSession
} from 'questions/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | account');

test('account route displays profile details first', function(assert) {
  server.create('user');
  authenticateSession(this.application, { user_id: 1 });
  visit('/account');

  andThen(() => {
    assert.equal(currentURL(), '/account/profile', 'displays profile child-route by default');
  });
});

test('account route shows links to view profile, your posted questions, and your posted answers', function(assert) {
  server.create('user');
  authenticateSession(this.application, { user_id: 1 });
  visit('/account');

  andThen(() => {
    assert.ok(find(testSelector('profile-link'))[0]);
    assert.ok(find(testSelector('my-questions-link'))[0]);
    assert.ok(find(testSelector('my-answers-link'))[0]);
  });
});

test('can navigate between viewing profile, posted questions, and posted answers', function(assert) {

});
