import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | checkout', function(hooks) {
  setupRenderingTest(hooks);

  test('Empty/lack of cart gives cart empty text', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Checkout />`);

    assert.equal(this.element.textContent.trim(), 'Cart is empty');
  });
});
