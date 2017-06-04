export default function(server) {

  server.createList('question', 10);
  server.create('answer', {questionId: 2});
}
