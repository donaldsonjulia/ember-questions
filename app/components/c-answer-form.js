import Ember from 'ember';

const {
  computed,
  isEmpty,
  inject: { service }
} = Ember;

let blankMobiledoc = {
  version: "0.3.1",
  markups: [],
  atoms: [],
  cards: [],
  sections: []
};

export default Ember.Component.extend({

  classNames: ['c-answer-form'],

  session: service(),
  currentUser: service(),

  init() {
    this._super(...arguments);

    this.set('mobiledoc', null);
  },

  question: null,
  'on-submit': null,

  formIncomplete: computed('mobiledoc', function() {

    let content = this.get('mobiledoc');

    return  isEmpty(content);
  }),

  actions: {

    postAnswer() {
      let question = this.get('question');
      let author = this.get('currentUser').user;
      let content = JSON.stringify(this.get('mobiledoc'));

      this.get('on-submit')({
        question,
        author,
        content
      }).then(() => {

        this.set('mobiledoc', blankMobiledoc);

      }).catch((error) => {
        this.set('showError', error);
      });
    },

    mobiledocWasUpdated(updatedDoc) {
      this.set('mobiledoc', updatedDoc);
    },

  }
});
