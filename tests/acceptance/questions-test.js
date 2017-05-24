import { test } from 'qunit';
import moduleForEmberfireAcceptance from 'questions/tests/helpers/module-for-emberfire-acceptance';
import FIREBASE_FIXTURE_DATA from 'questions/tests/fixtures/firebase/fixture-data';

moduleForEmberfireAcceptance('Acceptance | questions', {
  fixtureData: FIREBASE_FIXTURE_DATA
});

test('questions route should display all questions', function(assert) {
  visit('/questions');

  andThen(function() {
    assert.equal(currentURL(), '/questions/list', 'questions route automatically redirects to list view');
    assert.equal(find('.question-table__question-row').length, 4, 'displays correct amount of questions');
  });
});

test('can sort question list using select', function(assert) {
  visit('/questions/list');

  andThen(function() {
    assert.equal(find('.question-table__question-row:first .question-table__question-link').text().trim(), 'Newest unanswered question', 'initially displays the most recent unanswered question first');
  });

  fillIn('select', 'Newest');

  andThen(function() {
    assert.equal(find('.question-table__question-row:first .question-table__question-link').text().trim(), 'Newest question', 'displays the newest question first when sorting by newest');
  });
});

test('displays questions correctly', function(assert) {
  visit('/questions/list');

  andThen(function() {

    assert.equal(find('.question-table__question-row:first .question-table__question-data--answers').text().trim(), 'NEEDS ANSWER', 'first question, unanswered, displays needs-answer alert');

    assert.equal(find('.question-table__question-row:last .question-table__question-data--answers').text().trim(), '1ANSWER', 'last question, with 1 answer, displays correct amount of answers');

    assert.equal(find('.question-table__question-row:first .date').text().trim(), '05/20/2017');

  });

  fillIn('select', 'Newest');

  andThen(function() {
    assert.equal(find('.question-table__question-row:first .question-table__question-data--answers').text().trim(), '3ANSWERS', 'first question, with 3 answers, displays correct amount of answers');

  });

});
