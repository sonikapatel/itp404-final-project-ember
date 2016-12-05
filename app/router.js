import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('search', function() {
    this.route('results', {path: '/:term'});
    this.route({path: '/:term/'}, {path: '/:location'});
    });
this.route('restaurant', function() {
    this.route('store', { path: ':id'});
  });
});


export default Router;
 