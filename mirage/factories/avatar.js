import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    url() { return faker.internet.avatar(); },
    uploadedAt() { return faker.date.recent(); },
    
});
