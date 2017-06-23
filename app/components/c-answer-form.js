import Ember from 'ember';

const {
  computed,
  isEmpty,
  inject: { service }
} = Ember;

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
              debugger;
        this.setProperties({
          mobiledoc: null
        });
        console.log('mobiledoc set to null');
      }).catch((error) => {
        console.log(error);
        this.set('error', error)
      });
    },

    mobiledocWasUpdated(updatedDoc) {
      this.set('mobiledoc', updatedDoc);
    },

  }
});
