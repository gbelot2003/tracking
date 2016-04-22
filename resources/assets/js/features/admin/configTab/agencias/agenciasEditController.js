var agencias = function($scope, agenciasFactory, id, $uibModalInstance){

    $scope.loader = {
        loading: false
    };

    $scope.title = "Edicion de Agencia";

    $scope.isEdit = false;

    $scope.loader.loading = true;

    $scope.agencia = agenciasFactory.get({id:id}, function(){
        $scope.loader.loading = false;
    });

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };


    $scope.ok = function () {
        agenciasFactory.update({ id: id }, $scope.permiso).$promise
            .then(function success(response){
                $scope.message = true;
                $uibModalInstance.close($scope.message);
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
    app.controller('agenciasEditController', function($scope, agenciasFactory, id, $uibModalInstance){
        return agencias($scope, agenciasFactory, id, $uibModalInstance)
    })
};