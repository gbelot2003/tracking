var dash = function($scope, $http){
    $scope.title = "Agencias";
};

module.exports = function(app){
    app.controller('agenciasController', function($scope, $http){
        return dash($scope, $http);
    });
}