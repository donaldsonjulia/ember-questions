import Ember from 'ember';

const {
  computed,
  isEmpty
} = Ember;

export default Ember.Component.extend({

  classNames: ['answer-form'],

  init() {
    this._super(...arguments);

    this.set('mobiledoc', null);
  },

  question: null,
  author: '',
  'on-submit': null,

  formIncomplete: computed('author', 'mobiledoc', function() {
    let author = this.get('author');
    let content = this.get('mobiledoc');

    return isEmpty(author) || isEmpty(content);
  }),

  actions: {
    postAnswer() {
      let question = this.get('question');
      let author = this.get('author');
      let content = JSON.stringify(this.get('mobiledoc'));

      this.get('on-submit')({
        question,
        author,
        content
      }).then(() => {
        this.setProperties({
          author: '',
          mobiledoc: null
        });
      }).catch((error) => {
        this.set('error', error)
      });
    },

    mobiledocWasUpdated(updatedDoc) {
      this.set('mobiledoc', updatedDoc);
    },

  }
});
