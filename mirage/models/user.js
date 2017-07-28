import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  questions: hasMany('question'),
  answers: hasMany('answer'),
  avatar: belongsTo('avatar')

});
