import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['answer-form'],

  question: null,
  author: '',
  text: '',
  "on-submit": null,

  formIncomplete: Ember.computed.empty('author') && Ember.computed.empty('text'),

  actions: {
    postAnswer() {
      let question = this.get('question');
      let author = this.get('author');
      let text = this.get('text');
      this.get('on-submit')({
        question: question,
        author: author,
        text: text
      });
      this.set('author', '');
      this.set('text', '');
    }
  }
});
