var $ = require('jquery');
var app = require('angular');

var ngMaterial = require('angular-material');
var ngRoute = require('angular-route');
var ngAria = require('angular-aria');
var ngAnimate = require('angular-animate');
var ngResource = require('angular-resource');
var DataTable = require('angular-material-data-table');
var satellizer = require('satellizer');

var app = angular.module('app', [ngRoute, ngMaterial, satellizer, ngResource, DataTable]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);
