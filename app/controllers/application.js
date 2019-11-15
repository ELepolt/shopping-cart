import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

// This exists on every route so that the cart in the nav can always be up to date
export default class ApplicationController extends Controller {
  @service application;
}