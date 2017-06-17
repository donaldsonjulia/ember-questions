import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import { insertText, run } from '../../helpers/ember-mobiledoc-editor';

moduleForAcceptance('Acceptance | questions/new', {
  afterEach() {
  server.shutdown();
}
});

test('can post new question', function(assert) {
  server.createList('question', 5);

  visit('questions/new');

  fillIn(testSelector('author-input'), 'Lucia');
  fillIn(testSelector('subject-input'), 'Hola!');
  andThen(() => {
    let editorEl = find('.mobiledoc-editor__editor')[0];
    return insertText(editorEl, 'some text I wrote');
  });

  click(testSelector('submit-btn'));
  andThen(() => {
    assert.equal(currentURL(), '/questions/list', 'after successful form submission navigates to questions.list');
    assert.equal(find(testSelector('question-id')).length, 6, 'displays updated amount of questions');
    assert.equal(find(testSelector('question-id'))[0], find(testSelector('question-id', 6))[0], 'displays the newly created question first because it is the newest question');
  });


});
