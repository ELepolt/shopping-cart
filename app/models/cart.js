import DS from 'ember-data';
import { tracked } from '@glimmer/tracking';
const { Model } = DS;

export default class Cart extends Model {
  // Initialized as an empty array when the cart is created
  @tracked products;

  get cartIsEmpty() {
    return this.products.length === 0;
  }

  get displayProductsDictionary() {
    let uniqueProducts = this.products.uniq(),
        displayProductsDictionary = {};
    uniqueProducts.forEach(product => {
      let productCount = this.products.filterBy('id', product.id).length;
      displayProductsDictionary[product.title] = `$${productCount * product.price}`;
    });
    return displayProductsDictionary;
  }
};
