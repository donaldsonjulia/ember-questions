import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const {
  computed
} = Ember;


export default DS.Model.extend({
  author: DS.attr('string'),
  createdAt: DS.attr('date'),
  content: DS.attr('string'), //stringified mobiledoc
  question: DS.belongsTo('question'),

  formattedDate: computed('createdAt', function() {
    return moment(this.get('createdAt')).format('MM/DD/YYYY [at] h:mm a ');
  }),

  mobiledoc: computed('content', function() {
    return JSON.parse(this.get('content'));
  }),

});
