import { test } from 'qunit';
import moduleForEmberfireAcceptance from 'questions/tests/helpers/module-for-emberfire-acceptance';
import testSelector from 'ember-test-selectors';
import FIREBASE_FIXTURE_DATA from 'questions/tests/fixtures/firebase/fixture-data';

moduleForEmberfireAcceptance('Acceptance | questions/list', {
  fixtureData: FIREBASE_FIXTURE_DATA
});


/*** NOTE:these tests will need to be reviewed and re-factored after implementing pagination ***/

test('questions route should display all questions', function(assert) {
  visit('/questions');

  andThen(function() {
    assert.equal(currentURL().split('?')[0], '/questions/list', 'questions route automatically redirects to list view');   //removed all sort-by query params from URL for this test
    assert.equal(find(testSelector('question-id')).length, 4, 'displays correct amount of questions');
  });
});

test('initially displays questions sorted by newest questions first', function(assert) {
  visit('/questions/list');

  andThen(function() {
    assert.equal(find(testSelector('question-id'))[0], find(testSelector('question-id', '-KkSpzGeeqJAROQtp47U'))[0], 'displays the most recent question first by default');
  });

});

test('can sort question list by different params using select', function(assert) {
  visit('/questions/list');

  fillIn(testSelector('sort-select'), 'unanswered:desc,createdAt:desc');

  andThen(function() {
    assert.equal(currentURL(), '/questions/list?sort=unanswered%3Adesc%2CcreatedAt%3Adesc', 'url updates with newly defined query params for sort');
    assert.equal(find(testSelector('question-id'))[0], find(testSelector('question-id', '-Kkhzzl1N3bYRiYQ-l3Z'))[0], 'displays newest unanswered question first after sorting by unanswered');
  });

});


test('displays questions correctly', function(assert) {

  let unansweredQuestionID = '-Kkhzzl1N3bYRiYQ-l3Z';
  let singleAnswerQuestionID = '-Kjp2GlyLdc-elD_-jpi';
  let threeAnswersQuestionID = '-KkSpzGeeqJAROQtp47U';

  visit('/questions/list');

  andThen(function() {

    assert.equal(find(testSelector('answer-amount-for', unansweredQuestionID)).text().trim(), 'NEEDS ANSWER', 'unanswered question displays needs-answer alert');

    assert.equal(find(testSelector('answer-amount-for', singleAnswerQuestionID)).text().trim(), '1ANSWER', 'question with 1 answer displays correct answer amount and suffix');

    assert.equal(find(testSelector('answer-amount-for', threeAnswersQuestionID)).text().trim(), '3ANSWERS', 'question with 3 answers displays correct answer amount and suffix');

    assert.equal(find(testSelector('author-for', threeAnswersQuestionID)).text().trim(), 'Lucia', 'displays correct author name');

    assert.equal(find(testSelector('formatted-date-for', threeAnswersQuestionID)).text().trim(), '05/23/2017', 'displays correctly formatted date');
  });

});

test('can click on question subject link to view individual question', function(assert) {
    let questionID = '-Kkhzzl1N3bYRiYQ-l3Z';

    visit('/questions/list');

    click(testSelector('subject-link-for', questionID));

    andThen(function() {
        assert.equal(currentURL(), '/questions/question/' + questionID, 'clicking subject link takes user to individual question view');
      }
    );

  });
