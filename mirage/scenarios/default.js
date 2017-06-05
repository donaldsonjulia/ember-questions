export default function(server) {

  let questionAmount = 60;

  server.createList('question', questionAmount);

  for (let i = 1; i < questionAmount; i++) {
    let answerAmount = Math.floor(Math.random() * 10);

    server.createList('answer', answerAmount, {questionId: i});
  }

}
