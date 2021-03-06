import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    question: belongsTo('question'),
    author: belongsTo('user')
});
