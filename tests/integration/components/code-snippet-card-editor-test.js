import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('code-snippet-card-editor', 'Integration | Component | code snippet card editor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{code-snippet-card-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#code-snippet-card-editor}}
      template block text
    {{/code-snippet-card-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
