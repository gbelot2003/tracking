var dash = function($scope, $http){
    $scope.title = "Secciones Administrativas";
};

module.exports = function(app){
    app.controller('seccionesController', function($scope, $http){
        return dash($scope, $http);
    });
}