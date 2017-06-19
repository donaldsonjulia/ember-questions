import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username() { return faker.internet.userName(); },
  avatar() { return faker.internet.avatar(); },
  name() { return faker.name.firstName(); },
  surname() { return faker.name.lastName(); },
  email() { return faker.internet.email(); },
  password() { return faker.internet.password(); },

});
