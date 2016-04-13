var config = function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            controller: 'indexController',
            template: require('raw!../features/index/index.html')
        })
        .when('/login', {
            controller: 'loginController',
            template: require('raw!../features/login/login.html')
        })
        .when('/dashboard', {
            controller: 'dashController',
            template: require('raw!../features/admin/dashboard/dashboard.html')
        })
        .otherwise({
            redirectTo:'/'
        });

     $locationProvider.html5Mode(false);
};

module.exports = function(app){
    app.config(function($routeProvider, $locationProvider){
        return config($routeProvider, $locationProvider);
    });
};
