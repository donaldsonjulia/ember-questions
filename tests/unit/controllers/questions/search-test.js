import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:questions/search', 'Unit | Controller | questions/search', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['service:search']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
