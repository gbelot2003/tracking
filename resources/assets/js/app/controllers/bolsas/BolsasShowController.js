dash.controller('BolsasShowController', function($scope, bolsas, $location, $routeParams){
    $scope.bolsa = {};
    $scope.bolsa.shipments = [];

    // Esto llena la tabla al cargar!!
    $scope.bolsa = bolsas.get({id: $routeParams.id});
    if($scope.bolsa.shipments && $scope.bolsa.shipment.length){
        $scope.sizes = $scope.bolsa.shipments.length;
        console.log($scope.sizes);
    }

    var pusher = new Pusher('191a9d488c180451b633');
    var channel = pusher.subscribe('channel');

    channel.bind('event', function(data) {
        var state = data.estado;
        if(state === 4 || state === 7 || state === 8 || state === 9 || state === 10 || state === 11 || state === 12 || state === 13) {
            ngToast.warning({
                content: 'Error!! Esta encomianda no se puede ingresar a bolsa, parece que ya a sido entregada o se encuentra registrada en otra bolsa, revise el numero de la misma para verificar el error'
            });
        } else {
            $scope.bolsa.shipments.push(data.shipment);
            $scope.sizes = $scope.bolsa.shipments.length;
            $scope.$apply();
        }

        console.log($scope.bolsa.shipments);
    });

    $scope.$watch('shipment.code', function (newVal, oldVal) {
        if (oldVal == newVal || newVal === null || newVal == '') return;
        $scope.addShipmentToBag(newVal);
    }, true);

    $scope.addShipmentToBag = function(shipmentCode){
        $http.get('api/bolsas/query/shipment-states/' + shipmentCode).then(function successCallback(response){
            $scope.shipment.code = '';
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