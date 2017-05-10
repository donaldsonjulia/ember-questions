import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', { async: true, inverse: null }),
  text: DS.attr('string'),
  author: DS.attr('string')
});
