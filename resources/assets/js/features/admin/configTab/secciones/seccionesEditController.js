var secciones = function($scope, seccionesFactory, id, $uibModalInstance){

    $scope.loader = {
        loading: false
    };

    $scope.agencia = {};

    $scope.title = "Edicion de Secciones";

    $scope.isEdit = false;

    $scope.loader.loading = true;

    $scope.seccion = seccionesFactory.get({id:id}, id).$promise
        .then(function success(response){
            $scope.seccion = response;
            $scope.loader.loading = false;
        });

    $scope.ok = function () {
        seccionesFactory.update({ id: id }, $scope.seccion).$promise
            .then(function success(response){
                $scope.message = true;
                $uibModalInstance.close($scope.message);
            }, function(error){
                $scope.message = false;
                $uibModalInstance.close($scope.message);
            });
    };

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };


    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};

module.exports = function(app){
    app.controller('seccionesEditController', function($scope, seccionesFactory, id, $uibModalInstance, $http){
        return secciones($scope, seccionesFactory, id, $uibModalInstance, $http);
    });
};