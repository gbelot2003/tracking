var dash = function($scope, $http){
    $scope.title = "Usuarios";
};

module.exports = function(app){
    app.controller('usuariosController', function($scope, $http){
        return dash($scope, $http);
    });
}