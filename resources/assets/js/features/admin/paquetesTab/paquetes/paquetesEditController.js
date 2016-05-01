var paquetes = function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams){

    $scope.sender = {};
    $scope.reciber = {};
    $scope.sender.selected = '';
    $scope.reciber.selected = '';
    // Inicio de loaders
    $scope.loader = {
        loading: false,
        loading2: false
    };


    $scope.init = function(){
      $scope.loader.loading = true;
    	shipmentFactory.get({id:$routeParams.id}).$promise
    		.then(function success(response){
    			$scope.shipment = response;
                $scope.title = response.code;
                $scope.sender.selected = response.senders;
                $scope.reciber.selected = response.recivers;

                console.log(response.senders);
                $scope.loader.loading = false;
    		}, function error(){

    		});
    };

    $scope.init();

};

module.exports = function(app){
    app.controller('paquetesEditController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams){
        return paquetes($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams);
    })
};
