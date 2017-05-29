
import { test } from 'qunit';
import moduleForEmberfireAcceptance from 'questions/tests/helpers/module-for-emberfire-acceptance';
import testSelector from 'ember-test-selectors';
import FIREBASE_FIXTURE_DATA from 'questions/tests/fixtures/firebase/fixture-data';

moduleForEmberfireAcceptance('Acceptance | questions/question', {
  fixtureData: FIREBASE_FIXTURE_DATA
});

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
  // let text = "<p>Here is a possible solution:</p><pre><code class=\"lang-js\">this.answer = 'my answer';</code></pre><p>I hope that answers your question.</p>";

  let text = 'This is a test answer';

  visit('/questions/question/' + questionID);
  fillIn(testSelector('author-input'), author);
  fillIn('textarea', text);

  return pauseTest();

  click(testSelector('answer-submit'));

  andThen(() => {
    assert.equal(find(testSelector('answer')).length, 4, 'displays newly posted answer');
  });
});
