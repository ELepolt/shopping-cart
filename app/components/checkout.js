import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @service application;
  @tracked cart = this.application.cart;
  quantityDropDownOptions = [1,2,3,4,5,6,7,8,9,10];
  // This is realllllll ugly
  @action updateQuantity(productId) {
    // First we get the products that ARE NOT the selected product
    let otherProducts = this.cart.products.filter(p => { return p.id != productId; });
    // Then we get the product who's quantity is going to be updated
    let thisProduct = this.cart.products.findBy('id', productId);
    // Create a new array of new length with existing product
    let newQuantity = parseInt(document.getElementById(`${productId}-dropdown`).value);
    // Fill it
    let newQuantityProductArray = new Array(newQuantity).fill(thisProduct);
    // Concat the other products with the new array of new quantity
    this.cart.products = [].concat(otherProducts, newQuantityProductArray);

    // Gross
  }
}
