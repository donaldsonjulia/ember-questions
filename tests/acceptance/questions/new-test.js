import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | questions/new');

test('visiting /questions/new', function(assert) {
  visit('/questions/new');

  andThen(function() {
    assert.equal(currentURL(), '/questions/new');
  });
});
