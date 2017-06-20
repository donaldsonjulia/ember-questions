import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {
  RSVP: { Promise },
  $: { ajax },
  run,
  get
} = Ember;

export default Base.extend({
  serverTokenEndpoint: 'api/token',

  restore(data) {
    debugger;
  },

  authenticate(creds) {
    let { identification, password } = creds;
    let data = JSON.stringify({
      auth: {
        username: identification,
        password
      }
    });
    debugger;
    let requestOptions = {
      url: this.get('serverTokenEndpoint'),
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        let { jwt } = response;
        run((response) => { resolve({ token: jwt }); });
      }, (error) => {
        run(() => { reject(error); });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
