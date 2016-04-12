var AuthController = function($auth, $state, $http, $rootScope, $scope) {

    $scope.loginError = false;
    $scope.loginErrorText;

    $scope.login = function(){

        var credentials = {
            email: $scope.email,
            password: $scope.password
        };

        $auth.login(credentials).then(function(){
            return $http.get('api/authenticate/user').then(function(response) {
                var user = JSON.stringify(response.data.user);
                localStorage.setItem('user', user);
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.data.user;
                $state.go('user');
            })
        }, function(error){
            $scope.loginError = true;
            $scope.loginErrorText = error.data.error;
        });
    }
    console.log($scope)
};


module.exports  = function(app){
    app.controller('AuthController', function($auth, $state, $http, $rootScope, $scope){
        return AuthController($auth, $state, $http, $rootScope, $scope)
    })
};
