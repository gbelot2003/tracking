var paquetes = function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, estadosService, clientesFactory, $window){

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

    $scope.shipment.codes = [];

    $scope.newCod = '';

    $scope.transitos = estadosService.estado_paquetes;

    $scope.generateCode = function(){
        $scope.newCod =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    $scope.removeItem = function(item){
        $scope.shipment.codes.splice(item, 1);
    };

    $scope.$watch('newCod', function(newVal, oldVal){
        if(oldVal === newVal) return;
        if(newVal == '') return;
        if(oldVal != newVal){
            shipmentFactory.checkCode({code: newVal}).$promise.then(
                function success(response){
                    console.log(response);
                    if(response.value === 2){
                        $scope.shipment.codes.push($scope.newCod);
                        $scope.newCod = '';
                        angular.element('#code').trigger('focus');
                    } else {
                        ngToast.warning('El codigo que ingreso ya existe!!!');
                        $scope.newCod = '';
                        angular.element('#code').trigger('focus');
                    }
                },
                function error(response){

                }
            );

        }
    });


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

    $scope.submitShipment = function(num){
        $scope.loader.loading = true;
        shipmentFactory.save($scope.shipment).$promise.then(
            function success(response){
                $scope.loader.loading = false;
                if(num === 1){
                    $location.path('/paquetes');
                } else if(num === 2){
                    $window.location.reload()
                }
                ngToast.success('El cliente a sido creado correctamente');
            }, function error(response){
                $scope.loader.loading = false;
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
            }
        );
    };
};

module.exports = function(app){
    app.controller('paquetesCreateController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, estadosService, clientesFactory, $window){
        return paquetes($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, estadosService, clientesFactory, $window);
    });
};