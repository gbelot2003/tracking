var agencias = function($scope, agenciasFactory, $uibModalInstance, $http){

    $scope.loader = {
        loading: false
    };

    $scope.agencia = {};

    $scope.title = "Crear Agencia";

    $scope.isEdit = false;

    $scope.loader.loading = true;

    $scope.agencia = agenciasFactory.create().$promise
        .then(function success(response){
            $scope.departamentos = response.departameto;
            $scope.municipio = response.municipios;
            $scope.empresas = response.empresas;
            $scope.loader.loading = false;
        });


    $scope.$watch('agencia.departamento_id', function(){
        $http.get('/api/admin/municipios/relacionados/' +  $scope.agencia.departamento_id).then(function success(response){
            $scope.municipio = response.data;
        });
    });

    $scope.ok = function () {
        agenciasFactory.save($scope.agencia).$promise
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
    app.controller('agenciasCreateController', function($scope, agenciasFactory, $uibModalInstance, $http){
        return agencias($scope, agenciasFactory, $uibModalInstance, $http)
    })
};