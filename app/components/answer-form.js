import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['answer-form'],

  question: null,
  author: '',
  text: '',
  onSubmit: '',

  actions: {
    postAnswer() {
      let question = this.get('question');
      let author = this.get('author');
      let text = this.get('text');
      this.sendAction('onSubmit', {
        question: question,
        author: author,
        text: text
      });
      this.set('author', '');
      this.set('text', '');
    }
  }
});
