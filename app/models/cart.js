import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class Card extends Model {
  @hasMany('product') products;
};
