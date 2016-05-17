var paquetes = function($scope, shipmentFactory, estadosService, ngToast, $location, $http){

    $scope.shipments  = {};
    $scope.shipments.codes = [];
    $scope.estados = estadosService.estados_bulks;
    $scope.newCod = '';
    $scope.listaCodigos = [];

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    $scope.addShipments = function(value){

        $scope.shipments.codes.push(value);
        $scope.listaCodigos.push(value);

    };

    $scope.removeItem = function(item){
        $scope.shipments.codes.splice(item, 1);
        $scope.listaCodigos.splice(item, 1);
    };

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
                shipmentFactory.checkStateByCode({code: newVal}).$promise.then(
                    function success(response){
                        if(response.value === 1){
                            $scope.addShipments(newVal);
                            $scope.newCod = '';
                            angular.element('#code').trigger('focus');

                        } else {
                            ngToast.warning('El codigo que ingreso no existe!!!');
                            $scope.newCod = '';
                            angular.element('#code').trigger('focus');
                        }
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
                ngToast.warning('Ese paquete ya esta en la lista');
                $scope.newCod = '';
                angular.element('#code').trigger('focus');
            }
        }
    });

    $scope.sendShipments = function(){
        $http.post('/api/admin/paquetes/updateBulks', $scope.shipments).then(
            function success(response){
                $location.path('/paquetes');
                ngToast.success('Los cambios se han realizado');
            },
            function error(response){
                ngToast.danger('Hay algun problema de <strong>comunicación</strong>, el servidor!!');
            }
        )
    }
};

module.exports = function(app){
    app.controller('paquetesMultipleController', function($scope, shipmentFactory, estadosService, ngToast, $location, $http){
        return paquetes($scope, shipmentFactory, estadosService, ngToast, $location, $http);
    });
};