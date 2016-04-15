var app = require('angular');
var ngRoute = require('angular-route');
var satellizer = require('satellizer');

var app = angular.module('app', [ngRoute, satellizer]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);
