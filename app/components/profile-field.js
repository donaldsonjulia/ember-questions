import Ember from 'ember';
const { get } = Ember;

export default Ember.Component.extend({
  isEditing: false,
  dirtyField: '',

  didReceiveAttrs() {
    this._super(...arguments);
    let { user, field } = this.getProperties('user', 'field');
    this.set('dirtyField', get(user, field));
  },

  actions: {
    editField() {
      this.set('isEditing', true);
    },

    onSubmit(field, value) {
      let onUpdate = this.get('onUpdate');
      onUpdate(field, value).then(() => {
        this.set('isEditing', false);
      }).catch(() => {
        this.set('showError', true);
      });
    },

    cancelEdit() {
      let { user, field } = this.getProperties('user', 'field');
      this.set('dirtyField', get(user, field));
      this.set('showError', false);
      this.set('isEditing', false);
    }
  }
});
