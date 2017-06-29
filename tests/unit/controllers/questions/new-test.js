import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:questions/new', 'Unit | Controller | questions/new', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['service:session']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
