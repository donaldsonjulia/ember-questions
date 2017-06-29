import { moduleFor, test } from 'ember-qunit';

moduleFor('route:questions/search', 'Unit | Route | questions/search', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['service:search']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
