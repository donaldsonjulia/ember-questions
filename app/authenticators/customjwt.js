import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {
  RSVP: { Promise },
  $: { ajax },
  run,
  isEmpty
} = Ember;

export default Base.extend({
  serverTokenEndpoint: 'api/token',

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    let { identification, password } = creds;
    let data = JSON.stringify({
      auth: {
        username: identification,
        password
      }
    });

    let requestOptions = {
      url: this.get('serverTokenEndpoint'),
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        let { jwt, user_id } = response;
        run((response) => { resolve({ token: jwt, user_id }); });
      }, (error) => {
        run(() => { reject(error); });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
