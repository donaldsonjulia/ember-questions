import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  author() { return faker.name.firstName(); },
  createdAt() { return faker.date.recent(); },
  content: "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[],\"markups\":[],\"sections\":[[1,\"p\",[[0,[],0,\"test comment\"]]]]}",
});
