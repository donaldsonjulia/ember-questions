import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | account/my questions');

test('visiting /account/my-questions', function(assert) {
  visit('/account/my-questions');

  andThen(function() {
    assert.equal(currentURL(), '/account/my-questions');
  });
});
