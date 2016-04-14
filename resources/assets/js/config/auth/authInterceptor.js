module.exports = function(app){
    app.factory('authInterceptor', function($q, $location){
        return {
            request: function(config){
                //added
                config = config || {};
                //added

                config.headers = config.headers || {};

                if(localStorage.token){
                    config.headers.token = localStorage.token
                }

                return config;
            },
            responseError: function(rejection){
                if(rejection.status === 401){
                    $location.path('/login');
                }

                if(rejection.status === 402){
                    $location.path('/login');
                }

                if(rejection.status === 403){
                    $location.path('/');
                }

                return $q.reject(rejection);
            }
        };
    })
};

