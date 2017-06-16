
export default function() {
  this.namespace = '/api';

  this.get('/questions');

  // ** THESE DO NOT SEEM TO WORK **
  // this.get('/questions/list');
  // this.get('/questions/search');

  this.post('/token');

  this.get('/questions/:id');
  this.patch('/questions/:id');

  this.post('/questions');

  this.get('/answers');
  this.get('/answers/:id');

  this.post('/answers');


}
