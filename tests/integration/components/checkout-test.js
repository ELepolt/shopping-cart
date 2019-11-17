import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';
import Service from '@ember/service';

module('Integration | Component | checkout', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    // Any setup we may need
  });

  test('Empty/lack of cart gives cart empty text', async function(assert) {
    await render(hbs`<Checkout />`);
    assert.equal(this.element.textContent.trim(), 'Cart is empty');
  });

  test('Cart with items displays total price', async function(assert) {
    this.store = this.owner.lookup('service:store');
    let cartServer = this.server.create('cart');
    let cartStore = await this.store.findRecord('cart', cartServer.id);
    this.server.create('product', { price: 20.01 });
    this.server.create('product', { price: 20.01 });
    let products = await this.store.findAll('product');
    cartStore.products = products;
    let cart = Service.extend({
      cart: cartStore
    });
    this.owner.register('service:application', cart);
    await render(hbs`<Checkout />`);
    assert.equal(this.element.querySelector('.total-price').innerText, '$40.02', 'Total price is visible and correct');
  })
});
