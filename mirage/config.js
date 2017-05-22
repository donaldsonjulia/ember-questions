export default function() {
  this.namespace = '/api';

  this.get('/questions', (schema, request) => {
    return schema.questions.all();
  });

}
