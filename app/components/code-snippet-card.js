import Ember from 'ember';

export default Ember.Component.extend({

  codeMirrorOptions: {
      readOnly: true,
      lineNumbers: true,
      mode: 'htmlmixed',
      theme: 'elegant'
  },

});
