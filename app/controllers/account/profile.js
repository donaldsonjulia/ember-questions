import Ember from 'ember';
const { set } = Ember;

export default Ember.Controller.extend({
  actions: {
    saveChange(field, value) {
      let user = this.get('model');
      set(user, field, value);
      return user.save()
      .catch((error) => {
        user.rollbackAttributes();
        throw error;
      })
    }
  }
});
