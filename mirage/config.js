export default function() {

this.namespace = '/api';

this.get('/questions', () => {
  return {
    questions: [
    {id: 1, author: 'Julia', subject: 'test question', content: "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[],\"markups\":[[\"em\"],[\"code\"]],\"sections\":[[1,\"p\",[[0,[],0,\"hello\"]]],[1,\"p\",[[0,[0],1,\"hello\"]]],[1,\"h1\",[[0,[],0,\"hello\"]]],[3,\"ul\",[[[0,[],0,\"hello\"]]]],[3,\"ol\",[[[0,[],0,\" hello hello\"]],[[0,[],0,\"hello\"]]]],[1,\"p\",[]],[1,\"p\",[[0,[1],1,\"this.hello = 'hello!';\"]]]]}", createdAt: '2017-06-03T03:59:38.644Z'}
    ]
  }

});


}
