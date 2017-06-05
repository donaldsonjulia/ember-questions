import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  subject() { return faker.lorem.words(); },
  author() { return faker.name.firstName(); },
  createdAt() { return faker.date.recent(); },
  content: "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[],\"markups\":[[\"em\"],[\"code\"]],\"sections\":[[1,\"p\",[[0,[],0,\"hello\"]]],[1,\"p\",[[0,[0],1,\"hello\"]]],[1,\"h1\",[[0,[],0,\"hello\"]]],[3,\"ul\",[[[0,[],0,\"hello\"]]]],[3,\"ol\",[[[0,[],0,\" hello hello\"]],[[0,[],0,\"hello\"]]]],[1,\"p\",[]],[1,\"p\",[[0,[1],1,\"this.hello = 'hello!';\"]]]]}",

});