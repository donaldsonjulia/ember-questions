import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const {
  computed
} = Ember;


export default DS.Model.extend({
  author: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  subject: DS.attr('string'),
  content: DS.attr('string'), //stringified mobiledoc
  answers: DS.hasMany('answer', { async: true }),

  formattedDate: computed('createdAt', function() {
    return moment.utc(this.get('createdAt')).format('MM/DD/YYYY');
  }),

  unanswered: computed('answers.length', function() {
    return this.get('answers.length') === 0;
  }),

  mobiledoc: computed('content', function() {
    return JSON.parse(this.get('content'));
  }),

});
