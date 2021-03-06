
import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import { insertText } from '../../helpers/ember-mobiledoc-editor';
import {
  invalidateSession,
  authenticateSession
} from 'questions/tests/helpers/ember-simple-auth';

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

test('if user is logged in, they can post answer', function(assert) {

  server.create('user', { username: 'JuliaD' });
  authenticateSession(this.application, {user_id: 1});

  let question = server.create('question');

  let text = 'This is a test answer';

  visit('/questions/' + question.id);

  andThen(() => {
    let editorEl = find('.mobiledoc-editor__editor')[0];
    return insertText(editorEl, text);
  });

  click(testSelector('answer-submit'));

  andThen(() => {
    assert.ok(find(testSelector('answer')).length, 1, 'displays newly posted answer');
    assert.equal(find(testSelector('comment-author')).text().trim(), 'JuliaD says:');
    assert.equal(find(testSelector('comment-text')).text().trim(), 'This is a test answer');
  });
});

test('mobiledoc editor clears content after user submits answer', function(assert) {

  server.create('user', { username: 'JuliaD' });
  authenticateSession(this.application, {user_id: 1});

  let question = server.create('question');

  visit('/questions/' + question.id);

  andThen(() => {
    let editorEl = find('.mobiledoc-editor__editor')[0];
    return insertText(editorEl, 'This is a test answer');
  });

  click(testSelector('answer-submit'));

  andThen(() => {
    assert.equal(find('.mobiledoc-editor__editor').text().trim(), '', 'mobiledoc clears after submitting first answer');
    let editorEl = find('.mobiledoc-editor__editor')[0];
    return insertText(editorEl, 'This is a second test answer');
  });

  click(testSelector('answer-submit'));

  andThen(() => {
    assert.equal(find('.mobiledoc-editor__editor').text().trim(), '', 'mobiledoc clears after submitting second answer');
  });

});

test('if user is not logged in, they see a link to login instead of answer form', function(assert) {
  server.create('question');
  invalidateSession(this.application);
  visit('/questions/1');

  andThen(() => {
    let formExists = find(testSelector('answer-form')).length > 0;
    let loginNoticeExists = find(testSelector('login-notice')).length > 0;

    assert.equal(formExists, false, 'answer form does not display to user who is not logged in');
    assert.equal(loginNoticeExists, true, 'displays link to login in place of form if user is not logged in');
  });
});
