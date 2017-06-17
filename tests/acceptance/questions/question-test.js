
import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | questions/question');

test('displays correct amount of answers', function(assert){
  let questionID = '-KkSpzGeeqJAROQtp47U'; //this question has 3 answers in fixture data
  visit('/questions/question/' + questionID);

  andThen(() => {
    assert.equal(find(testSelector('answer')).length, 3, 'displays 3 answers for question');
  });

});

test('can post answer', function(assert) {
  let questionID = '-KkSpzGeeqJAROQtp47U'; //this question has 3 pre-existing answers in fixture data
  let author = 'Lucia';
  let text = '<p>This is a test answer</p>';

  visit('/questions/question/' + questionID);
  fillIn(testSelector('author-input'), author);

  //CANNOT GET THIS TO WORK

  return pauseTest();

  click(testSelector('answer-submit'));

  andThen(() => {
    assert.equal(find(testSelector('answer')).length, 4, 'displays newly posted answer');
  });
});
