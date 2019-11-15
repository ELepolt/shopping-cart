import DS from 'ember-data';
const { Model, attr } = DS;

export default class Product extends Model {
  @attr title;
  @attr price;
  @attr imageUrl;
  @attr description;
  get displayPrice() {
    return `$${this.price}`;
  }
}