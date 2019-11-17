import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | cart', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('cart', { products: [] });
    assert.equal(model.cartIsEmpty, true, 'Newly created cart is empty');
    let product = store.createRecord('product', { title: 'test title', price: 20 });
    model.products = [product];
    assert.equal(model.cartIsEmpty, false, 'Cart is no longer empty');
    // I would typically do a better job getting the ID here for this test, but I ran out of time
    assert.deepEqual(model.displayProductsDictionary, { 'test title': { price: '$20', count: 1, productId: null }}, 'displayProductsDictionary functioning as imagined');

    let productTwo = store.createRecord('product', { title: 'test title', price: 20 });
    model.products = [product, productTwo];
    // I would typically do a better job getting the ID here for this test, but I ran out of time
    assert.deepEqual(model.displayProductsDictionary, { 'test title': { price: '$40', count: 2, productId: null }}, 'displayProductsDictionary still functioning as imagined');
    assert.ok(model);
  });
});
