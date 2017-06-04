export default function() {
  this.namespace = '/api';

  this.get('/questions');
  this.get('/questions/:id');

  this.get('/questions/:id/answers', function(schema, request) {
    let questionId = request.params.id;
    return schema.comments.where({ questionId: questionId});
  });

  this.get('/answers/:id');

  this.post('/answers');

}
