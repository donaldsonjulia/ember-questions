import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-answer-amount', 'Integration | Component | c answer amount', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-answer-amount}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-answer-amount}}
      template block text
    {{/c-answer-amount}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
