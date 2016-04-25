require('./config/bootstrap');

var app = angular.module('app', [
        'ngRoute',
        'satellizer',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ngToast',
        'localytics.directives',
        'angularSpinner'
]);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);