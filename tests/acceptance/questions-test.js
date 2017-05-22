import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';


moduleForAcceptance('Acceptance | questions');

test('visiting questions route should display all questions', function(assert) {

  visit('/questions');

  andThen(function() {
    assert.equal(currentURL(), '/questions/list');

  });
});
