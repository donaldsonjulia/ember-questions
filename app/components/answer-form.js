import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['answer-form'],

  question: null,
  author: '',
  textObj: {
    content: null
  },
  "on-submit": null,

  formIncomplete: Ember.computed.empty('author') || Ember.computed.empty('textObj.content'),

  actions: {
    postAnswer() {
      let question = this.get('question');
      let author = this.get('author');
      let text = this.get('textObj.content');
      this.get('on-submit')({
        question: question,
        author: author,
        text: text
      });
      this.set('author', '');
      this.set('textObj', {
        content: null
      });
    }
  }
});
