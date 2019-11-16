import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';
import Service from '@ember/service';

module('Integration | Component | product', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
    let cartServer = this.server.create('cart');
    this.cart = this.store.findRecord('cart', cartServer.id);
    this.cart.products = [];
    let cart = Service.extend({
      cart: this.cart
    });
    this.owner.register('service:application', cart);
  });

  test('Can add product to cart', async function(assert) {
    let productServer = this.server.create('product');
    this.set('product', this.store.findRecord('product', productServer.id));
    await render(hbs`<Product @product={{product}} />`);

    assert.equal(this.cart.products.length, 0, 'Cart is empty to begin with');
    let buttons = findAll('.btn-primary');
    assert.equal(buttons.length, 1, 'Button to add product to cart exists');
    let addButton = buttons[0];
    await click(addButton);
    assert.equal(this.cart.products.length, 1, 'Cart now has an item in it');
  });
});
