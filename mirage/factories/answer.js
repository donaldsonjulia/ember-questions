import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  author() { return faker.name.firstName(); },
  createdAt() { return faker.date.recent(); },
  content: "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[],\"markups\":[[\"em\"],[\"code\"]],\"sections\":[[1,\"p\",[[0,[],0,\"comment\"]]],[1,\"p\",[[0,[0],1,\"comment\"]]],[1,\"h1\",[[0,[],0,\"comment\"]]],[3,\"ul\",[[[0,[],0,\"comment\"]]]],[3,\"ol\",[[[0,[],0,\" comment comment\"]],[[0,[],0,\"comment\"]]]],[1,\"p\",[]],[1,\"p\",[[0,[1],1,\"this.comment = 'comment!';\"]]]]}",
});
