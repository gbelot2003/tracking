var config = function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide){

    function redirectWhenLoggedOut($q, $injector) {

        return {
            responseError: function(rejection){
                var $state = $injector.get('$state');
                var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];
                angular.forEach(rejectionReasons, function(value, key) {
                    if(rejection.data.error === value) {
                        localStorage.removeItem('user');
                        $state.go('auth');
                    }
                });
                return $q.reject(rejection);
            }
        }
    }

    $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

    $httpProvider.interceptors.push('redirectWhenLoggedOut');

    $authProvider.loginUrl = '/api/authenticate';

    $urlRouterProvider.otherwise('/auth');

    $stateProvider
        .state('auth', {
            url: '/auth',
            template: require('raw!../auth/authView.html'),
            controller: 'AuthController as auth'
        })
        .state('user', {
            url: '/user',
            template: require('raw!../users/userView.html'),
            controller: 'UserController as user'
        });

};

module.exports  = function(app){
    app.config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide){
        return config($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide);
    })
};