import { test } from 'qunit';
import moduleForAcceptance from 'questions/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import { insertText, run } from '../../helpers/ember-mobiledoc-editor';
import {
  currentSession,
  invalidateSession,
  authenticateSession
} from 'questions/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | questions/new', {
  afterEach() {
  server.shutdown();
}
});

test('if user is logged in, can post new question', function(assert) {
  server.createList('question', 5);
  server.create('user');
  authenticateSession(this.application, { user_id: 1 });

  visit('questions/new');
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

test('if user is not logged in, they cannot post and instead see link to login', function(assert) {
  invalidateSession(this.application);
  visit('questions/new');

  andThen(() => {
    let questionFormExists = find(testSelector('new-question-form')).length > 0;
    let loginNoticeExists = find(testSelector('login-notice')).length > 0;

    assert.equal(questionFormExists, false, 'question form does not display if user is not logged in');
    assert.equal(loginNoticeExists, true, 'displays link to login');
  });

});
