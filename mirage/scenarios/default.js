export default function(server) {

  server.create('user', { username: 'Julia', password: 'julia123' }); // 1 user for manual testing
  server.create('user', { username: 'Taras', password: 'asdf' }); // 2 user for manual testing
  server.create('user', { username: 'Michael', password: '1234' }); // 3 user for manual testing
  server.create('user', { username: 'Jorge', password: 'jorge123' }); // 4 user for manual testing
  server.create('user', { username: 'Guest', password: 'password' }); // 4 user for manual testing

  server.create('avatar', { userId: 1 });
  server.create('avatar', { userId: 2 });
  server.create('avatar', { userId: 3 });
  server.create('avatar', { userId: 4 });
  server.create('avatar', { userId: 5 });

  server.createList('question', 10, { authorId: 1 });
  server.createList('question', 10, { authorId: 2 });
  server.createList('question', 10, { authorId: 3 });
  server.createList('question', 10, { authorId: 4 });
  server.createList('question', 20, { subject: 'Ember Data', authorId: 4 }); // total 60 fake questions

  for (let i = 1; i <= 60; i++) {
    let answerAmount = Math.floor(Math.random() * 3);
    let randomUserId = Math.ceil(Math.random() * 4);

    server.createList('answer', answerAmount, {questionId: i, authorId: randomUserId });
  }




}
