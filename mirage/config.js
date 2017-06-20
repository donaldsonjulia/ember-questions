import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = '/api';

  this.get('/questions');

  this.post('/token', (schema, request) => {
    let req = JSON.parse(request.requestBody);
    let username = req.auth.username;
    let password = req.auth.password;
    let user_id = 1;  //how to get user_id dynamically from login credentials?

    if(password === 'test123') {
      return new Mirage.Response(201, {}, { jwt: 'mirageToken', user_id });
    } else {
      return new Mirage.Response(404, {}, 'Invalid username and password.');
    }

  });

  this.get('/questions/:id');
  this.patch('/questions/:id');

  this.post('/questions');

  this.get('/answers');
  this.get('/answers/:id');

  this.post('/answers');

  this.get('/users');
  this.get('/users/:id');

}
