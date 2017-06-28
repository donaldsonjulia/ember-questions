import Ember from 'ember';
const {
  computed,
  isEmpty,
  inject: { service }
} = Ember;

export default Ember.Component.extend({

  session: service(),
  currentUser: service('current-user'),

  identification: '',
  password: '',

  loginFormInvalid: computed('identification', 'password', function() {
    let identification = this.get('identification');
    let password = this.get('password');

    return isEmpty(identification) || isEmpty(password);
  }),

  actions: {
     login() {
       this.set('errorMessage', false); //reset error on each login attempt
       let { identification, password } = this.getProperties('identification', 'password');

       this.get('onSubmit')(identification, password)
       .catch((error) => {
          this.set('errorMessage', error.responseText);
       });
       
     }
  }

});
