import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  createdAt() { return faker.date.recent(); },
  content: "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[],\"markups\":[],\"sections\":[[1,\"p\",[[0,[],0,\"test comment\"]]]]}",
});
