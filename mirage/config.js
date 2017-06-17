import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = '/api';

  this.get('/questions');

  this.post('/token', (schema, request) => {
    let req = JSON.parse(request.requestBody);
    let password = req.password;

    if(password === 'julia') {
      return new Mirage.Response(201, {}, { jwt: 'testToken'});
    } else {
      return new Mirage.Response(404, {}, { error: 'Incorrect Password'});
    }

  });

  this.get('/questions/:id');
  this.patch('/questions/:id');

  this.post('/questions');

  this.get('/answers');
  this.get('/answers/:id');

  this.post('/answers');


}
