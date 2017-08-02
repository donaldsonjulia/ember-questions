import Ember from 'ember';

let card = {
 name: 'simple-image',
 type: 'dom',
 render({env, options, payload}) {
   let src = payload.src || 'http://placekitten.com/100x100';
   let img = document.createElement('img');
   img.src = src;
   return img;
 }
};

export default Ember.Component.extend({

    editor: null, //pass in editor when calling component

    actions: {
      addCode() {
        this.get('editor.addCard')(card);
      },
    }

});
