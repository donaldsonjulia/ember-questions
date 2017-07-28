import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  avatar: DS.belongsTo('avatar'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  questions: DS.hasMany('question'),
  answers: DS.hasMany('answer'),

});
