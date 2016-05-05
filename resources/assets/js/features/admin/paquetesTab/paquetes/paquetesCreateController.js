var paquetes = function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, estadosService, clientesFactory){

    $scope.loader = {
        loading: false,
        loading2: false
    };


    $scope.showSenderName = false;

    $scope.showReciberName = false;

    $scope.senderName = '';

    $scope.reciberName = '';

    $scope.shipment = {};

    $scope.shipment.estado_id = 2;

    $scope.sender = {};

    $scope.reciber = {};

    $scope.loader.loading = true;

    $scope.title = "Crear paquete";

    $scope.transitos = estadosService.estado_paquetes;

    $scope.generateCode = function(){
        $scope.shipment.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    /**
     * Sender
     * @param $select
     * @returns {*}
     */
    $scope.searchSenders = function($select){
        return $http.get('/api/admin/clientes/listado-search/' + $select.search).then(function(response){
            $scope.senders = response.data;
            $scope.loader.loading = false;
        });
    };

    $scope.sourceSenderChanged = function(){
        $scope.shipment.sender_id = $scope.sender.selected.id;
        clientesFactory.get({id:$scope.sender.selected.id}).$promise.then(
            function success(response){
                $scope.remitente = response.cliente;
            },
            function error(response){
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
                console.log(response);
            }
        );
    };


    $scope.senderModal = function(num){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./sender-create.html'),
            controller: 'senderCreateController',
            backdrop: 'static',
            size: 'lg',
            resolve:{
                num: num
            }
        });

        modalInstance.result.then(function success(response){
            if(num === 1){
                $scope.showSenderName = true;
                $scope.senderName = response.name;
                $scope.shipment.sender_id = response.id
            } else {
                $scope.showReciberName = true;
                $scope.reciberName = response.name;
                $scope.shipment.reciber_id = response.id
            }
        });
    };

    /**
     * Reciber
     * @param $select
     * @returns {*}
     */
    $scope.searchReciber = function($select){
        return $http.get('/api/admin/clientes/listado-search/' + $select.search).then(function(response){
            $scope.recibers = response.data;
        });
    };

    $scope.sourceReciberChanged = function(){
        $scope.shipment.reciber_id = $scope.reciber.selected.id;
        clientesFactory.get({id:$scope.reciber.selected.id}).$promise.then(
            function success(response){
                $scope.destinatario = response.cliente;
            },
            function error(response){
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
                console.log(response);
            }
        );
    };


    $scope.submitShipment = function(){
        shipmentFactory.save($scope.shipment).$promise
            .then(function success(response){
                $location.path('/paquetes');
                ngToast.success('El cliente a sido creado correctamente');
            }, function error(){
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
            });
    };
};

module.exports = function(app){
    app.controller('paquetesCreateController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, estadosService, clientesFactory){
        return paquetes($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, estadosService, clientesFactory);
    })
};