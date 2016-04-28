var dash = function($scope, $http){
    $scope.message = "it works";
};

module.exports = function(app){
    app.controller('dashController', function($scope, $http){
        return dash($scope, $http);
    });
}