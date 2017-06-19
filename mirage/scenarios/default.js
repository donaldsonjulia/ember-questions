export default function(server) {

  server.createList('user', 5); // total 5 fake users

  server.createList('question', 10, { authorId: 1 });
  server.createList('question', 10, { authorId: 2 });
  server.createList('question', 10, { authorId: 3 });
  server.createList('question', 10, { authorId: 4 });
  server.createList('question', 20, { subject: 'Apples & Bananas', authorId: 5 }); // total 60 fake questions

  for (let i = 1; i <= 60; i++) {
    let answerAmount = Math.floor(Math.random() * 3);
    let randomUserId = Math.ceil(Math.random() * 5);

    server.createList('answer', answerAmount, {questionId: i, authorId: randomUserId });
  }




}
