import DS from 'ember-data';
import { tracked } from '@glimmer/tracking';
const { Model } = DS;

export default class Cart extends Model {
  // Initialized as an empty array when the cart is created
  @tracked products;

  // Odd issue in testing which required me to check products against null
  get cartIsEmpty() {
    let cartIsEmpty = true;
    if (this.products) {
      cartIsEmpty = this.products.length === 0;
    }
    return cartIsEmpty;
  }

  /*
    TODO: Realized a little late that this should probably be it's own model.
    Something like UserProductSelection which would have a product and quantity,
    and belong to a cart/user. That would alleviate a bit of this function and
    allow logged in users to save their products for future purchases
  */
  get displayProductsDictionary() {
    let displayProductsDictionary = {};
    if (!this.cartIsEmpty) {
      let uniqueProducts = this.products.uniq();
      uniqueProducts.forEach(product => {
        let productCount = this.products.filterBy('id', product.id).length;
        displayProductsDictionary[product.title] = { price: `$${productCount * product.price}`, count: productCount, productId: product.id };
      });
    }
    return displayProductsDictionary;
  }

  get totalCartPrice() {
    let totalCartPrice = 0;
    if (!this.cartIsEmpty) {
      totalCartPrice = this.products.map((x) => { return parseFloat(x.price) }).reduce((a, b) => a + b);
    }
    return `$${totalCartPrice}`;
  }
}
