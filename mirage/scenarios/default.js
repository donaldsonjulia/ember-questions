export default function(server) {

  let questionAmount = 40;
  let totalQuestionAmount = 20;

  server.createList('question', questionAmount);

  server.createList('question', 20, { subject: 'Apples & Bananas' });

  for (let i = 1; i < totalQuestionAmount; i++) {
    let answerAmount = Math.floor(Math.random() * 5);

    server.createList('answer', answerAmount, {questionId: i});
  }




}
