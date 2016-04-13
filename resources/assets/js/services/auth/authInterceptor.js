module.exports = function(app){
    app.factory('authInterceptor', function($q, $location){
        return {
            request: function(config){
                config.headers = config.headers || {};
                if(localStorage.token){
                    config.headers.token = localStorage.token
                }
                return config;
            },
            responseError: function(response){
                if(response.status === 401 || response.status === 400){
                    $location.path('/login');
                }
                return $q.reject
            }
        };
    })
};