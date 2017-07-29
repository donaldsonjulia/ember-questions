import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | account/my answers');

test('visiting /account/my-answers', function(assert) {
  visit('/account/my-answers');

  andThen(function() {
    assert.equal(currentURL(), '/account/my-answers');
  });
});
