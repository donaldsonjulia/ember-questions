import Ember from 'ember';
const {
  computed,
  isEmpty,
  inject: {service}
} = Ember;

export default Ember.Component.extend({

  session: service(),

  login: '',
  password: '',

  loginFormInvalid: computed('login', 'password', function() {
    let login = this.get('login');
    let password = this.get('password');

    return isEmpty(login) || isEmpty(password);
  }),

  actions: {
    authenticate() {
       let { identification, password } = this.getProperties('identification', 'password');
       this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
         this.set('errorMessage', reason.error || reason);
       });
     },
     
  }

});
