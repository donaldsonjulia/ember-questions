import Ember from 'ember';

export function displayText(text) {
  return Ember.String.htmlSafe(`${text}`);
}

export default Ember.Helper.helper(displayText);
