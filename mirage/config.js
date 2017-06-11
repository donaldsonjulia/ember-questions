
export default function() {
  this.namespace = '/api';

  this.get('/questions', (schema, request) => {
    let page = parseInt(request.queryParams.page);
    let limit = parseInt(request.queryParams.limit);
    let startAt = page * limit;
    let endAt = startAt + limit;
    console.log(startAt, endAt);
    let questionsToReturn = schema.questions.all().slice(startAt, endAt);
    return questionsToReturn;
  });



  this.get('/questions/:id');
  this.patch('/questions/:id');

  this.post('/questions');

  this.get('/answers');
  this.get('/answers/:id');

  this.post('/answers');


}
