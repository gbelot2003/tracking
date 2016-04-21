require('angular');
require('angular-route');
require('satellizer');
require('angular-resource');
require('angular-sanitize');
require('angular-animate');
require('angular-touch');
require('angular-bootstrap-npm');
require('ng-toast');
require('jquery-chosen/chosen.jquery.js');
require('angular-chosen-localytics/dist/angular-chosen.min.js');

var app = angular.module('app',
    [
        'ngRoute',
        'satellizer',
        'ngResource',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ngToast',
        'localytics.directives'
]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);