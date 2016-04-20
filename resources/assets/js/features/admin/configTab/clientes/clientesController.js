var dash = function($scope, $http){
    $scope.title = "Personal Cliente";
};

module.exports = function(app){
    app.controller('clientesController', function($scope, $http){
        return dash($scope, $http);
    });
}