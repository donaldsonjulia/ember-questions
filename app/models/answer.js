import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  createdAt: DS.attr('date'),
  text: DS.attr('string'),
  question: DS.belongsTo('question')
});
