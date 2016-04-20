var permisos = function($scope, $http){
    $scope.title = "Permisos";
};

module.exports = function(app){
    app.controller('permisosController', function($scope, $http){
        return permisos($scope, $http);
    });
}