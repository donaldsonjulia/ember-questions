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

        let response = yield image.upload('/api/avatars/upload');
        set(avatar, 'url', response.headers.Location);
        yield avatar.save();
     } catch(e) {
       avatar.rollbackAttributes();
     }

  }),

  actions: {
    uploadImage(image) {
      this.get('uploadAvatar').perform(image);
    }
  }
});
