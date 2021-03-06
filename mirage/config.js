import Mirage, { faker } from 'ember-cli-mirage';

export default function() {
  this.namespace = '/api';

  this.get('/questions');

  this.get('/questions/:id');
  this.patch('/questions/:id');

  this.post('/questions');

  this.get('/answers');
  this.get('/answers/:id');

  this.post('/answers');

  this.get('/users');
  this.get('/users/:id');
  this.patch('/users/:id');
  this.post('/users/change-password', (schema, request) => {
    let { currentPassword, newPassword } = JSON.parse(request.requestBody);
    if (currentPassword === newPassword) {
      return new Mirage.Response(400);
    } else {
      return new Mirage.Response(200, {}, {
        data: {
          success: true,
          message: 'Password updated.'
        }
      });
    }
  });

  this.get('/avatars/:id');
  this.post('/avatars/upload', () => {
    let newUrl = faker.internet.avatar();
    return new Mirage.Response(201, { Location: newUrl }, {
      data: {
        success: true,
        message: 'Profile photo updated.',
        location: newUrl
      }
    });
  });


  /* below is for response when using the customjwt authenticator for authentication*/

  this.post('/token', (schema, request) => {
    let req = JSON.parse(request.requestBody);
    let username = req.auth.username;

    let [user] = schema.users.where({username}).models;

    if (!user) {
      // return an error because a user was not found for given username
      return new Mirage.Response(404, {}, 'Username does not exist.');
    }

    if (user.attrs.password !== req.auth.password) {
      // return error for mismatched credentials
      return new Mirage.Response(404, {}, 'Invalid username and password.');
    }

    return new Mirage.Response(201, {}, { jwt: 'mirageToken', user_id: user.id });
  });

}
