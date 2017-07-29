import Ember from 'ember';
import { task } from 'ember-concurrency';
const {
  computed,
  inject: { service },
} = Ember;


export default Ember.Controller.extend({

  ajax: service(),

  savePassword: task(function * (currentPassword, newPassword) {
    try {
      this.set('showError', false);
      yield this.get('ajax').request('/users/change-password', {
        method: 'POST',
        data: {
          currentPassword,
          newPassword
        }
      });
      this.setProperties({
        showSuccess: true,
        currentPassword: '',
        newPassword: '',
        confirmedNew: ''
      });
    } catch(e) {
      this.set('showError', true);
    }
  }),

  currentPassword: '',
  newPassword: '',
  confirmedNew: '',

  showError: null,

  hasCurrentPassword: computed.readOnly('currentPassword.length'),
  hasNewPassword: computed.gte('newPassword.length', 4),
  hasConfirmedPassword: computed.gte('confirmedNew.length', 4),
  passwordsMatch: computed('newPassword', 'confirmedNew', function() {
    let newPassword = this.get('newPassword');
    let confirmedNew = this.get('confirmedNew');
    return newPassword === confirmedNew;
  }),

  formValid: computed.and('hasCurrentPassword', 'hasNewPassword', 'passwordsMatch'),

  actions: {

  }
});
