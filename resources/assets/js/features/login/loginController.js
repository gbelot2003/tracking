var login = function($scope, $location, auth){

    $scope.login = function(){
        if($scope.loginForm.$valid){
         var promise = auth.login($scope.user);
            promise.then(success, error);
        }
    };

    var success = function(response){
        localStorage.setItem('satellizer_token', response.data.token);
        $location.path('/dashboard');

    };

    var error = function(response){
        $scope.wrongCredentials = true;
        $scope.messageErrorServer = response.data.error;
        $scope.user.password = '';
    };

};

module.exports = function(app){
    app.controller('loginController', function($scope, $location, auth){
        return login($scope, $location, auth);
    });
};