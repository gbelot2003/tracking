var view = function($scope, $uibModalInstance, id, shipmentFactory, ngToast){

    $scope.loader = {
        loading: false
    };

    $scope.loader.loading = true;

    $scope.init = function(){
        shipmentFactory.get({id:id}).$promise.then(
            function success(response){
                $scope.paquete = response;
                $scope.title = response.code;
                $scope.loader.loading = false;
            },
            function error(response){
                ngToast.danger("Ha ocurrido un problema con esta con sulta en el servidor");
                $scope.cancel();
            }
        )
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.init();
};

module.exports = function(app){
    app.controller('bolsaPaqueteViewController', function($scope, $uibModalInstance, id, shipmentFactory, ngToast){
       return view($scope, $uibModalInstance, id, shipmentFactory, ngToast);
    });
};