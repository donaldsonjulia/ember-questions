import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  author: DS.attr('string'),
  createdAt: DS.attr('date'),
  subject: DS.attr('string'),
  text: DS.attr('string'),
  answers: DS.hasMany('answer'),

  formattedDate: Ember.computed('createdAt', function() {
    return moment(this.get('createdAt')).format('MM/DD/YYYY');
  }),

  textPreview: Ember.computed('text', function() {
    return this.get('text').split(' ').slice(0, 50).join(' ');
  }),

});
