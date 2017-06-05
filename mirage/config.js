export default function() {
  this.namespace = '/api';

  this.get('/questions');
  this.get('/questions/:id');
  this.patch('/questions/:id');

  this.post('/questions');

  this.get('/answers');
  this.get('/answers/:id');

  this.post('/answers');


}
