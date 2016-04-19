require('angular');
require('angular-route');
require('angular-bootstrap-npm');
require('angular-animate');
require('angular-touch');
require('angular-resource');
require('satellizer');
require('angular-sanitize');
require('angular-modal-service');
require('ng-toast');
require('jquery-chosen/chosen.jquery.js');
require('angular-chosen-localytics/dist/angular-chosen.min.js');

var app = angular.module('app',
    [
        'ngRoute',
        'satellizer',
        'ngResource',
        'ui.bootstrap',
        'ngAnimate',
        'ngTouch',
        'ngToast',
        'angularModalService',
        'localytics.directives',
]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);
