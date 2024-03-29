import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.commerce.productName();
  },
  price() {
    return faker.commerce.price();
  },
  imageUrl() {
    return faker.random.image();
  },
  description() {
    return faker.lorem.sentence();
  }
});
