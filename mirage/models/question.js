import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  answers: hasMany('answer'),
  author: belongsTo('user')
});
