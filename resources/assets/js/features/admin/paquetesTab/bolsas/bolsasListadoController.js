var listados = function($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast, $uibModal){

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    $scope.shipments = [];
    $scope.listaCodigos = [];
    $scope.showTable = false;

    $scope.loader = {
        loading: false,
        loading2: false,
        loading3: false
    };

    $scope.loader.loading = true;

    $scope.init = function(){
        bolsasFactory.get({id: $routeParams.id}).$promise.then(
            function success(response){
                $scope.bolsa = response;
                if($scope.bolsa.shipments.length >= 1){
                    $scope.showTable = true;
                }
                $scope.title = response.code;
                $scope.loader.loading = false;
                angular.forEach($scope.bolsa.shipments, function(e){
                    $scope.listaCodigos.push(e.code);
                });
            },
            function error(response){
                ngToast.danger('Hay problemas de comunicación con el servidor');
            }
        )
    };

    var pusher = new Pusher('17ccb306ef6fff721e51', {
        encrypted: true
    });

    var channel = pusher.subscribe('channel-' + $routeParams.id);

    channel.bind('event', function(data) {
        $scope.shipments.push(data.paquete);
        $scope.listaCodigos.push(data.paquete.code);
        $scope.showTable = true;
        $scope.$apply();
    });

    $scope.$watch('newCod', function(newVal, oldVal){
        if(oldVal === newVal) return;
        if(newVal == '') return;
        if(oldVal != newVal){
            var isNumber = isNumeric(newVal);
            if(isNumber === false){
                ngToast.warning('Debes ingresar valores numericos solamente!!!');
                $scope.newCod = '';
                angular.element('#code').trigger('focus');
                return;
            }
            var isNoInBag = _.contains($scope.listaCodigos, $scope.newCod);
            if(isNoInBag === false){
                shipmentFactory.byCode({code: $scope.newCod, bag: $routeParams.id}).$promise.then(
                    function success(response){
                        $scope.newCod = '';
                    },
                    function error(response){
                        if(response.status === 404){
                            ngToast.danger('Este <strong>CÓDIGO</strong> es invalido, el estado del paquete es :<br/><strong>' + response.data + '</strong>');
                        } else {
                            ngToast.danger('Hay algun problema de <strong>comunicación</strong>, el servidor!!');
                        }
                        $scope.newCod = '';
                    }
                );
            } else {
                ngToast.warning('Ese paquete ya a sido registrado en la bolsa');
            }
        }
    });


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

    $scope.init();

};

module.exports = function(app){
    app.controller('bolsasListadoController', function($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast, $uibModal){
        return listados($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast, $uibModal)
    });
};