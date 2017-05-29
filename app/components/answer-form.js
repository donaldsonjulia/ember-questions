import Ember from 'ember';

const {
  computed,
  isEmpty
} = Ember;

export default Ember.Component.extend({

  classNames: ['answer-form'],

  init() {
    this._super(...arguments);

    this.set('textObj', {
      content: null
    });
  },

  question: null,
  author: '',
  'on-submit': null,

  formIncomplete: computed('author', 'textObj.content', function() {
    let author = this.get('author');
    let content = this.get('textObj.content');

    return isEmpty(author) || isEmpty(content);
  }),

  actions: {
    postAnswer() {
      let question = this.get('question');
      let author = this.get('author');
      let text = this.get('textObj.content');

      this.get('on-submit')({
        question,
        author,
        text
      }).then(() => {
        this.setProperties({
          author: '',
          textObj: {
            content: null
          }
        });
      }).catch((error) => {
        this.set('error', error)
      });
    }

  }
});
