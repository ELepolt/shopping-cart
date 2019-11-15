import DS from 'ember-data';
import { tracked } from '@glimmer/tracking';
const { Model } = DS;

export default class Cart extends Model {
  // Initialized as an empty array when the cart is created
  @tracked products;
};
