import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | questions/list', {
  afterEach() {
  server.shutdown();
}
});

test('questions/index automatically routes to questions/list', function(assert) {
  visit('/questions');

  andThen(() => {
    assert.equal(currentURL().split('?')[0], '/questions/list', 'questions route automatically redirects to list view');
  });
});

test('displays questions sorted by newest questions first', function(assert) {
  server.createList('question', 10, { createdAt: '2017-06-06T20:58:47.062Z'});
  server.createList('question', 10, { createdAt: '2017-06-10T20:58:47.062Z'});
  server.create('question', { createdAt: '2017-06-25T20:58:47.062Z'})
  visit('/questions/list');

  andThen(() => {
    assert.equal(find(testSelector('question-id'))[0], find(testSelector('question-id', 21))[0], 'displays the most recent question first by default');
  });

});

test('can sort question list by different params using select', function(assert) {
  let answeredQuestionAmount = 5;
  server.createList('question', answeredQuestionAmount); //create questions that will have answers
  for (let i = 1; i <= answeredQuestionAmount; i++) {
    server.create('answer', { questionId: i }); //create answer for each question
  }
  server.create('question'); //create single unanswered question

  visit('/questions/list');
  fillIn(testSelector('sort-select'), 'unanswered');

  andThen(() => {
    assert.equal(currentURL(), '/questions/list?sort=unanswered', 'url updates with newly defined query params for sort');
    assert.equal(find(testSelector('question-id'))[0], find(testSelector('question-id', 6))[0], 'displays newest unanswered question first after sorting by unanswered');
  });

});

test('displays questions correctly', function(assert) {

  let singleAnswerQuestionId = 1;
  let threeAnswersQuestionId = 2;
  let unansweredQuestionId = 3;

  server.createList('question', 2);
  server.create('question', { author: 'Lucia', createdAt: '2017-05-31T00:42:28.143Z', subject: 'Hola!' });
  server.create('answer', {questionId: 1});
  server.createList('answer', 3, {questionId: 2});

  visit('/questions/list');

  andThen(() => {

    assert.equal(find(testSelector('answer-amount-for', unansweredQuestionId)).text().trim(), 'NEEDS ANSWER', 'unanswered question displays needs-answer alert');

    assert.equal(find(testSelector('answer-amount-for', singleAnswerQuestionId)).text().trim(), '1ANSWER', 'question with 1 answer displays correct answer amount and suffix');

    assert.equal(find(testSelector('answer-amount-for', threeAnswersQuestionId)).text().trim(), '3ANSWERS', 'question with 3 answers displays correct answer amount and suffix');

    assert.equal(find(testSelector('author-for', unansweredQuestionId)).text().trim(), 'Lucia', 'displays correct author name');

    assert.equal(find(testSelector('formatted-date-for', unansweredQuestionId)).text().trim(), '05/31/2017', 'displays correctly formatted date');

    assert.equal(find(testSelector('subject-link-for', unansweredQuestionId)).text().trim(), 'Hola!', 'displays correct subject');
  });

});

test('can click on question subject link to view individual question', function(assert) {
    server.createList('question', 20);
    visit('/questions/list');
    click(testSelector('subject-link-for', 2));

    andThen(() => {
        assert.equal(currentURL(), '/questions/2', 'clicking subject link takes user to individual question view');
      }
    );
  });

test('can click on next button to navigate to next page', function(assert) {
    server.createList('question', 30);
    visit('/questions/list');
    click(testSelector('next-page-btn'));

    andThen(() => {
        assert.equal(currentURL(), '/questions/list?page=2', 'clicking on next page button takes user to next page of questions');
      }
    );
  });

  test('can click on previous button to navigate to previous page', function(assert) {
      server.createList('question', 30);
      visit('/questions/list?page=3');
      click(testSelector('prev-page-btn'));

      andThen(() => {
          assert.equal(currentURL(), '/questions/list?page=2', 'clicking on previous page button takes user to previous page of questions');
        }
      );
    });
