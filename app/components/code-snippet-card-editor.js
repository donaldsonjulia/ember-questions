import Ember from 'ember';

let defaultCode = 'let x = 2';
export default Ember.Component.extend({

  codeMirrorOptions: {
      lineNumbers: true,
      mode: 'javascript',
      autofocus: true,
      theme: 'elegant',
  },

  payload: {
    codeContent: defaultCode
  },

  actions: {
    updateCodeContent(newCode) {
      //saveCard is an action provided by mobiledoc helper createComponentCard
      //first argument is payload, second is the value for transition (false, so card does not toggle away from edit mode)
      this.get('saveCard')({ codeContent: newCode }, false);
    }
  }
});
