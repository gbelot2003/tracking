var lista = function($scope, $uibModalInstance, id, $uibModal, bolsasFactory, ngToast){

    $scope.loader = {
        loading: false
    };

    $scope.loader.loading = true;

    $scope.init = function(){
        bolsasFactory.get({id: id}).$promise.then(
            function success(response){
                $scope.bolsaId = id;
                $scope.title = response.code;
                $scope.paquetes = response.shipments;

                $scope.viewby = 5;
                $scope.totalItems = $scope.paquetes.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 5; //Number of pager buttons to show

                $scope.paginating = true;
                if($scope.totalItems < 6){
                    $scope.paginating = false;
                }

                $scope.setPage = function (pageNo) {
                    $scope.currentPage = pageNo;
                };

                $scope.pageChanged = function() {
                    console.log('Page changed to: ' + $scope.currentPage);
                };

                $scope.setItemsPerPage = function(num) {
                    $scope.itemsPerPage = num;
                    $scope.currentPage = 1; //reset to first paghe
                };

                $scope.loader.loading = false;
            },
            function error(response){
                ngToast.danger("Ha ocurrido un problema con esta con sulta en el servidor");
                $scope.cancel();
            }
        );
    };

    $scope.showShipments = function(id){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./bolsa-paquete-view.html'),
            controller: 'bolsaPaqueteViewController',
            backdrop: 'static',
            resolve: {
                id: id
            }
        });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.init();
};

module.exports = function(app){
    app.controller('bolsasModalListController', function($scope, $uibModalInstance, id, $uibModal, bolsasFactory, ngToast){
        return lista($scope, $uibModalInstance, id, $uibModal, bolsasFactory, ngToast);
    })
};