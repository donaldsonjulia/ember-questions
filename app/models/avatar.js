import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  url: DS.attr('string'),
  filename: DS.attr('string'),
  filesize: DS.attr('number'),
  uploadedAt: DS.attr('date'),

});
