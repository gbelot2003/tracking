var paquetes = function($scope){
    $scope.title = "Crear paquete";

};

module.exports = function(app){
    app.controller('paquetesCreateController', function($scope){
        return paquetes($scope);
    })
};