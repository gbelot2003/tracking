var $ = require('jquery');
var app = require('angular');
var ngRoute = require('angular-route');
var ngResource = require('angular-resource');
var satellizer = require('satellizer');

var app = angular.module('app', [ngRoute, satellizer, ngResource]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);
