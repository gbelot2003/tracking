var paquetes = function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location){

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

    $scope.transitos = [
        {id: 2, name:'Transito, regular', description: 'La encomienda a ingresado a la linea de entragas y esta en manos de la empresa de mensajeria.'},
        {id: 3, name:'Transito, Centro de acopio', description: 'La encomienda a ingresado a el centro de acopio descrito.'},
        {id: 4, name:'Transito, en bolsa de transporte', description: 'El paquete a ingresado a una bolsa para su traslado a destinos posteriores o su entrega.'},
        {id: 5, name:'Transito, presenta daños ligeros', description: 'La encomienda presenta algun tipo de daños.'}
    ];

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
    app.controller('paquetesCreateController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location){
        return paquetes($scope, $http, ngToast,  $uibModal, shipmentFactory, $location);
    })
};