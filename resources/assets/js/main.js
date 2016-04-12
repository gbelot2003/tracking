var angular = require('angular');
var uiRouter = require('angular-ui-router');
require('satellizer');
var app = angular.module('app', [uiRouter, 'satellizer']);

require('./config')(app);
require('./auth/AuthController')(app);
require('./users/userController')(app);


