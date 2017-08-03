import Ember from 'ember';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

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
    this.set('editedDoc', null);
  },

  cards: computed(function() {
    return [
      createComponentCard('code-snippet-card')
    ];
  }),

  question: null,
  'on-submit': null,

  formIncomplete: computed('editedDoc', function() {

    let content = this.get('editedDoc');

    return  isEmpty(content);
  }),

  actions: {

    postAnswer() {
      let question = this.get('question');
      let author = this.get('currentUser').user;
      let content = JSON.stringify(this.get('editedDoc'));

      this.get('on-submit')({
        question,
        author,
        content
      }).then(() => {

        //below accounts for bug in which editor does not clear when posting more than once
        //must change value of mobiledoc explicitly to get editor to re-render
        if (this.get('mobiledoc') === blankMobiledoc) {
          this.set('mobiledoc', null);
        } else {
          this.set('mobiledoc', blankMobiledoc);
        }

        this.set('editedDoc', null);

      }).catch((error) => {
        this.set('showError', error);
      });
    },

    mobiledocWasUpdated(updatedDoc) {
      this.set('editedDoc', updatedDoc);
    },

    willCreateEditor() {
      console.log('About to create the editor');
    },

    didCreateEditor(editor) {
      console.log('Created the editor, see below:');
      console.log(editor);
    },

  }
});
