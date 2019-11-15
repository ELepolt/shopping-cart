import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class ApplicationService extends Service {
  @service store;

  // Will store the cart for the session
  activeCart = null;

  // gets or creates a new cart for the session
  get cart() {
    if (!this.activeCart) {
      // On the initial hit we will need to create a new cart and initialize products as an empty array
      this.activeCart = this.store.createRecord('cart', { products: [] });
    }
    return this.activeCart;
  }
  
}