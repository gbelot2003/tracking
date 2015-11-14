dash.controller('BolsasCreateController', function($scope, $http, $location, ModalService, ngToast){
    $scope.bolsa = {};
    $scope.generateCode = function(){
        $scope.bolsa.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    $scope.bolsa.shipments = [];

    $scope.$watch('shipment.code', function (newVal, oldVal) {
        if (oldVal == newVal || newVal === null || newVal == '') return;
        $scope.addShipmentToBag(newVal);
    }, true);

    $scope.addShipmentToBag = function(shipmentCode){
        $http.get('api/bolsas/query/shipment-states/' + shipmentCode).then(function successCallback(response){
            var state = response.data.estado;
            if(state === 4 || state === 7 || state === 8 || state === 9 || state === 10 || state === 11 || state === 12 || state === 13){
                ngToast.warning({
                    content: 'Error!! Esta encomianda no se puede ingresar a bolsa, parece que ya a sido entregada o se encuentra registrada en otra bolsa, revise el numero de la misma para verificar el error'
                });
                return;
            } else {
                $scope.bolsa.shipments.push(response.data.shipment);
                $scope.sizes = $scope.bolsa.shipments.length;
                $scope.shipment.code = '';
            }

        }, function errorCallback(response){
            console.log(response);
            ngToast.danger({
                content: 'Error!! Posiblemente el codigo de shipment esta mal introducido, o no tienes acceso a las consultas del lado del servidor'
            });
        });
    };

    $scope.removeShipmente = function(code){
        $scope.bolsa.shipments.splice($scope.bolsa.shipments[code], 1);
        $scope.sizes = $scope.bolsa.shipments.length;
    }

});