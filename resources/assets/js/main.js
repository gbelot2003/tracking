var app = require('angular');
var ngRoute = require('angular-route');
var ngBootstrap = require('angular-bootstrap-npm');
var ngAnimate = require('angular-animate');
var ngTouch = require('angular-touch');
var ngResource = require('angular-resource');
var satellizer = require('satellizer');

var app = angular.module('app',
    [
        ngRoute,
        satellizer,
        ngResource,
        ngBootstrap,
        ngAnimate,
        ngTouch
]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);
