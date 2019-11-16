import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | product', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    // Oddly enough, if it's an even .00 the model will convert it to an int
    // But only in the tests, not through mirage
    let model = store.createRecord('product', { price: 20.01 });
    assert.equal(model.displayPrice, '$20.01', 'Display price functions as expected');
    assert.ok(model);
  });
});
