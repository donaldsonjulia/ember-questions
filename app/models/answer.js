import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';


export default DS.Model.extend({
  author: DS.attr('string'),
  createdAt: DS.attr('date'),
  text: DS.attr('string'),
  question: DS.belongsTo('question'),

  formattedDate: Ember.computed('createdAt', function() {
    return moment(this.get('createdAt')).format('MM/DD/YYYY [at] h:mm a ');
  }),

});
