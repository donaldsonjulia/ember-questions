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
  visit('/account');
  andThen(() => {
    assert.equal(currentURL(), '/account/profile', 'displays profile child-route by default');
  });
});

test('account route shows links to view profile, your posted questions, and your posted answers', function(assert) {

});

test('can navigate between viewing profile, posted questions, and posted answers', function(assert) {

});
