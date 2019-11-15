import Route from '@ember/routing/route';

export default class SomeRouteRoute extends Route {
  model() {
    return this.store.findAll('product');
  }
};
