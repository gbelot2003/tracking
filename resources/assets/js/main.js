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
require('spin/spin.js');
require('angular-spinner/angular-spinner.js');
require('ngMorph/dist/angular-morph.js'); // **download with bower, copy and paste on node_module **

var app = angular.module('app', [
        'ngRoute',
        'satellizer',
        'ngResource',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ngToast',
        'localytics.directives',
        'angularSpinner',
        'ngMorph'
]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);