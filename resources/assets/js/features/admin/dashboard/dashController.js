var dash = function($scope, $http){

    $scope.message = "it works";
    $http.get('http://trackhn.local/api/admin/users').then(function success(response){
        $scope.items = response.data;
    }, function errorCallback(response){
        $scope.message = "you are not loged in";
    });

};

module.exports = function(app){
    app.controller('dashController', function($scope, $http){
        return dash($scope, $http);
    });
}