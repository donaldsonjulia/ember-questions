import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {
  RSVP: { Promise },
  inject: { service },
  isPresent
} = Ember;

export default Base.extend({
  serverTokenEndpoint: '/api/token',
  ajax: service(),

  restore(data) {
    return new Promise((resolve, reject) => {
      if (isPresent(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    let { identification, password } = creds;
    let data = {
      auth: {
        username: identification,
        password
      }
    };

    let url = this.get('serverTokenEndpoint');

    return this.get('ajax').request(url, {
        type: 'POST',
        data,
        contentType: 'application/json; charset=utf-8'
      })
      .then((response) => {
        let { jwt, user_id } = response;
        return {
          token: jwt,
          user_id
        };
      });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
