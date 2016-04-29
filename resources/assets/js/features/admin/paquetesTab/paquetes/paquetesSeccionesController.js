var secciones = function($scope, seccionesFactory, $uibModalInstance){

    $scope.loader = {
        loading: false
    };

    $scope.seccion = {};

    $scope.title = "Crear Sección Administrativa";

    $scope.ok = function () {
        seccionesFactory.save($scope.seccion).$promise
            .then(function success(response){
                $uibModalInstance.close(response);
            }, function(error){
                $scope.message = false;
                $uibModalInstance.close($scope.message);
            });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};

module.exports = function(app){
    app.controller('paquetesSeccionesController', function($scope, seccionesFactory, $uibModalInstance){
        return secciones($scope, seccionesFactory, $uibModalInstance);
    });
};