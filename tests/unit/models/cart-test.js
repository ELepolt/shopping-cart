import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | cart', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('cart', { products: [] });
    assert.equal(model.cartIsEmpty, true, 'Newly created cart is empty');
    let product = store.createRecord('product', { title: 'test title', price: 20 });
    model.products = [product];
    assert.equal(model.cartIsEmpty, false, 'Cart is no longer empty');
    assert.deepEqual(model.displayProductsDictionary, { 'test title': '$20' }, 'displayProductsDictionary functioning as imagined');

    let productTwo = store.createRecord('product', { title: 'test title', price: 20 });
    model.products = [product, productTwo];
    assert.deepEqual(model.displayProductsDictionary, { "test title": "$40" }, 'displayProductsDictionary still functioning as imagined');
    assert.ok(model);
  });
});
