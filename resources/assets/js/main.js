require('./config/bootstrap');

var app = angular.module('app',
    [
        'ngRoute',
        'satellizer',
        'ngResource',
        'ngSanitize',
        'ui.select',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ngToast',
        'angularSpinner',
        'ngFileUpload',
        'highcharts-ng'
    ]
);

require('./config')(app);
require('./services')(app);
require('./directives')(app);
require('./features')(app);