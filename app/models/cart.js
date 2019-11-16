import DS from 'ember-data';
import { tracked } from '@glimmer/tracking';
const { Model } = DS;

export default class Cart extends Model {
  // Initialized as an empty array when the cart is created
  @tracked products;

  get cartIsEmpty() {
    let cartIsEmpty = true;
    if (this.products) {
      cartIsEmpty = this.products.length === 0;
    }
    return cartIsEmpty;
  }

  get displayProductsDictionary() {
    let displayProductsDictionary = {};
    if (!this.cartIsEmpty) {
      let uniqueProducts = this.products.uniq();
      uniqueProducts.forEach(product => {
        let productCount = this.products.filterBy('id', product.id).length;
        displayProductsDictionary[product.title] = `$${productCount * product.price}`;
      });
    }
    return displayProductsDictionary;
  }

  get totalCartPrice() {
    let totalCartPrice = 0;
    if (!this.cartIsEmpty) {
      totalCartPrice = this.products.map((x) => { return x.price }).reduce((a, b) => a + b);
    }
    return `$${totalCartPrice}`;
  }
}
