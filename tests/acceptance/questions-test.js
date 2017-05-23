import { test } from 'qunit';
import moduleForEmberfireAcceptance from 'questions/tests/helpers/module-for-emberfire-acceptance';
import FIREBASE_FIXTURE_DATA from 'questions/tests/fixtures/firebase/fixture-data';

moduleForEmberfireAcceptance('Acceptance | questions', {
  fixtureData: FIREBASE_FIXTURE_DATA
});

test('visiting questions route should display all questions', function(assert) {

  visit('/questions');

  andThen(function() {
    assert.equal(currentURL(), '/questions/list');

  });
});
