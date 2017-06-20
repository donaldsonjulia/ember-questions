import Ember from 'ember';
const {
  computed,
  isEmpty,
  inject: {service}
} = Ember;

export default Ember.Component.extend({

  session: service(),
  currentUser: service('current-user'),

  identification: '',
  password: '',

  loginFormInvalid: computed('login', 'password', function() {
    let login = this.get('login');
    let password = this.get('password');

    return isEmpty(login) || isEmpty(password);
  }),

  actions: {
     login() {
       this.set('errorMessage', false); //reset error on each login attempt
       let { identification, password } = this.getProperties('identification', 'password');
       debugger;
       this.get('session').authenticate('authenticator:customjwt', { identification, password }).catch((reason) => {
         this.set('errorMessage', reason.error || reason);
       });
     },
     logout() {
       this.get('session').invalidate();
     },

  }

});
