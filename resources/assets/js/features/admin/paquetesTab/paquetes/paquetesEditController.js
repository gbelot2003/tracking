var paquetes = function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams){

    $scope.sender = {};
    $scope.reciber = {};
    $scope.sender.selected = '';
    $scope.reciber.selected = '';
    // Inicio de loaders
    $scope.loader = {
        loading: false,
        loading2: false,
        loading3: false
    };

    $scope.loader.loading = true;
    $scope.init = function(){
    	shipmentFactory.get({id:$routeParams.id}).$promise
    		.then(function success(response){
    			$scope.shipment = response;
                $scope.title = response.code;
                $scope.sender.selected = response.senders;
                $scope.reciber.selected = response.recivers;
                console.log(response.senders);
                $scope.loader.loading = false;
                $scope.loader.loading3 = false;
    		}, function error(){

    		});
    };


    $scope.createModal = function(){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./transitos-create.html'),
            controller: 'transitosCreateController',
            backdrop: 'static',
            resolve:{
                shipId: $scope.shipment.code,
                id: $scope.shipment.id
            }
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a creado correctamente el transito');
                $scope.loader.loading3 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización.');
                $scope.loader.loading3 = false;
            }
        });

    };

    $scope.editModal = function(id){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./transitos-edit.html'),
            controller: 'transitosEditController',
            backdrop: 'static',
                resolve: {
                    id: id,
                    shipId : $scope.shipment.code
                }
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a actualizado correctamente el transito');
                $scope.loader.loading3 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización.');
                $scope.loader.loading3 = false;
            }
        });
    };


    $scope.init();

};

module.exports = function(app){
    app.controller('paquetesEditController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams){
        return paquetes($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams);
    })
};
