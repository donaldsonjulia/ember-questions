import Ember from 'ember';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

//use this helper to pass component cards into any instances of mobiledoc-editor component
//example: {{mobiledoc-editor mobiledoc=someMobiledoc cards=(mobiledoc-component-cards)}}

export function mobiledocComponentCards() {
  return [
    createComponentCard('code-snippet-card')
  ];
}

export default Ember.Helper.helper(mobiledocComponentCards);
