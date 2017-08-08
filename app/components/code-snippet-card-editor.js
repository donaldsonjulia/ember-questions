import Ember from 'ember';

export default Ember.Component.extend({

  codeMirrorOptions: {
      lineNumbers: true,
      mode: 'javascript',
      autofocus: true,
      theme: 'elegant',
  },

  actions: {
    updateCodeContent(newCode) {
      this.set('payload.codeContent', newCode);
    }
  }
});
