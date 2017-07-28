import Ember from 'ember';
import { task } from 'ember-concurrency';

const { get, set } = Ember;

export default Ember.Controller.extend({

  uploadAvatar: task(function * (image) {
     let user = this.get('model');

     let avatar = this.store.createRecord('avatar', {
       user,
       filename: get(image, 'name'),
       filesize: get(image, 'size')
     });

     try {
       image.readAsDataURL().then(function (url) {
         if (get(avatar, 'url') === null) {
           set(avatar, 'url', url);
         }
        });

        let response = yield image.upload('/images');
        set(image, 'url', response.headers.Location);
        yield avatar.save();

     } catch(e) {
       avatar.rollbackAttributes();
       console.log('problem uploading!');
     }

  }),

  actions: {
    uploadImage(image) {
      this.get('uploadAvatar').perform(image);
    }
  }
});
