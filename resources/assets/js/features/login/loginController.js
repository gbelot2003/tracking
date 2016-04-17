var login = function($scope, $location, authentication, credent){

    $scope.login = function(){
        if($scope.loginForm.$valid){
         var promise = authentication.login($scope.user);
            promise.then(success, error);
        }
    };

    var success = function(response){
        localStorage.setItem('satellizer_token', response.data.token);
        $location.path('/dashboard');
        var promise = credent.getCredentials();
        promise.then(function success(response){
            var user = JSON.stringify(response.data.user);
            localStorage.setItem('user', user);
        });
    };

    var error = function(response){
        $scope.wrongCredentials = true;
        $scope.messageErrorServer = response.data.error;
        $scope.user.password = '';
    };

};

module.exports = function(app){
    app.controller('loginController', function($scope, $location, authentication, credent){
        return login($scope, $location, authentication, credent);
    });
};