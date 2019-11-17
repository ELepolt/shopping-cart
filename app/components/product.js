import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class extends Component {
  @service application;
  @action addToCart(product) {
    let cart = this.application.cart;
    cart.products = [].concat(cart.products, [product]);
  }
}