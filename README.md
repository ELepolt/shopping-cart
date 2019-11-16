[This code is currently running on Heroku](https://mysterious-harbor-33680.herokuapp.com/)

(It may take a moment to spin up)

# Overview
Hi. This is a simple product/cart implementation built using EmberJS.

## Ember

A quick rundown of Ember's folder structure:

* `models`: Simple enough. The model structure, including computed properties, which allow new attributes based on the actual model
* `routes`: `app/router.js` defines how routes are handled, which sends the logic to the corresponding file in `routes/`
  * The route file typically is where the API call is made
* `components`: Pass in a model, do some logic, allow some actions, return results to the user
* `templates`: The HTML of the routes and components. Each route/component corresponds to a template
* `controllers`: Not used very much in Ember 3+, but I needed the one for the navigation
* `helpers`: These are usually for anything specific to your app, converting timezones, adding things together, etc
* `services`: "A Service is an Ember object that lives for the duration of the application, and can be made available in different parts of your application." I use this to make sure the cart is always accessible
* `tests`: Automated tests!

## Mirage

One reason for choosing Ember was the ease of implementation of [mirage](https://www.ember-cli-mirage.com/docs/getting-started/what-is-mirage) to implement a fake server. All calls to the server are actually faked via mirage, located in the `mirage/config.js

Mirage allows me to create fake data so I don't have to worry about the actual server.

It also allows you to write integration tests against your components, which is pretty sweet.

# Installation/Running

* `git clone https://github.com/ELepolt/shopping-cart` this repository
* `cd shopping-cart`
* `docker-compose up`
* Visit [http://localhost:4200/](http://localhost:4200/)
* Visit [http://localhost:4200/tests](http://localhost:4200/tests) if you want to see what Ember's testing page looks like

If you just want to see it in action, head to [https://mysterious-harbor-33680.herokuapp.com/](https://mysterious-harbor-33680.herokuapp.com/)


# EmberJS README BELOW

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd myapp`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
