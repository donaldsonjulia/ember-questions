import { test } from 'qunit';
import moduleForEmberfireAcceptance from 'questions/tests/helpers/module-for-emberfire-acceptance';
import testSelector from 'ember-test-selectors';
import FIREBASE_FIXTURE_DATA from 'questions/tests/fixtures/firebase/fixture-data';

moduleForEmberfireAcceptance('Acceptance | questions', {
  fixtureData: FIREBASE_FIXTURE_DATA
});

test('questions route should display all questions', function(assert) {
  visit('/questions');

  /* NOTE:this test will need to be re-written after implementing pagination */

  andThen(function() {
    assert.equal(currentURL(), '/questions/list', 'questions route automatically redirects to list view');
    assert.equal(find(testSelector('list-question-id')).length, 4, 'displays correct amount of questions');
  });
});

test('initially displays questions sorted by newest unanswered questions first', function(assert) {
  visit('/questions/list');

  andThen(function() {
    assert.equal(find(testSelector('list-question-id'))[0], find(testSelector('list-question-id', '-Kkhzzl1N3bYRiYQ-l3Z'))[0], 'displays the most recent unanswered question first by default');
  });

});

test('can sort question list by different params using select', function(assert) {
  visit('/questions/list');

  fillIn(testSelector('list-sort-select'), 'newest');

  andThen(function() {
    assert.equal(find(testSelector('list-question-id'))[0], find(testSelector('list-question-id', '-KkSpzGeeqJAROQtp47U'))[0], 'displays newest question first after sorting by newest');
  });

});


test('displays questions correctly', function(assert) {
  visit('/questions/list');

  andThen(function() {

    assert.equal(find(testSelector('list-answer-amount-for', '-Kkhzzl1N3bYRiYQ-l3Z')).text().trim(), 'NEEDS ANSWER', 'unanswered question displays needs-answer alert');

    assert.equal(find(testSelector('list-answer-amount-for', '-Kjp2GlyLdc-elD_-jpi')).text().trim(), '1ANSWER', 'question with 1 answer displays correct answer amount and suffix');

    assert.equal(find(testSelector('list-answer-amount-for', '-KkSpzGeeqJAROQtp47U')).text().trim(), '3ANSWERS', 'question with 3 answers displays correct answer amount and suffix');

    assert.equal(find(testSelector('list-author-for', '-KkSpzGeeqJAROQtp47U')).text().trim(), 'Lucia', 'displays correct author name');

    assert.equal(find(testSelector('list-formatted-date-for', '-KkSpzGeeqJAROQtp47U')).text().trim(), '05/23/2017', 'displays correctly formatted date');

  });

});
