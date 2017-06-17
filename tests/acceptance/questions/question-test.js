
import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import { insertText, run } from '../../helpers/ember-mobiledoc-editor';

moduleForAcceptance('Acceptance | questions/question', {
  afterEach() {
  server.shutdown();
}
});

test('displays correct amount of answers', function(assert){
  let question = server.create('question');
  server.createList('answer', 3, { questionId: question.id });

  visit('/questions/' + question.id);

  andThen(() => {
    assert.equal(find(testSelector('answer')).length, 3, 'displays 3 answers for question');
  });

});

test('can post answer', function(assert) {
  let question = server.create('question');
  server.createList('answer', 3, { questionId: question.id });

  let author = 'Lucia';
  let text = 'This is a test answer';

  visit('/questions/' + question.id);
  fillIn(testSelector('author-input'), author);
  andThen(() => {
    let editorEl = find('.mobiledoc-editor__editor')[0];
    return insertText(editorEl, text);
  });

  click(testSelector('answer-submit'));

  andThen(() => {
    assert.equal(find(testSelector('answer')).length, 4, 'displays newly posted answer');
  });
});
