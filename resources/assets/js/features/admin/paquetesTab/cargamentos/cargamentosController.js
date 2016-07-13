var cargamentos = function($scope, bolsasFactory, estadosService, $timeout, ngToast){
    $scope.loader = {
        loading: false,
        loading2: false
    };
    $scope.bolsas = [];
    $scope.loader.loading = false;
    $scope.title = "Cargamentos (Bolsas multiples)";
    $scope.estados = estadosService.estado_paquetes;
    $scope.showTable = false;
    $scope.estado_id = '';
    $scope.details = '';
    $scope.request = {};

    $scope.addBolsa = function(object){
        $scope.bolsas.push(object);
        $scope.searchable = '';
    };

    $scope.limpiar = function(){
        $scope.showTable = false;
        $scope.bolsas = [];
        $scope.estado_id = '';
        $scope.details = '';
    };

    $scope.SubmitBolsas = function () {
        $scope.request.bolsas = $scope.bolsas;
        $scope.request.estado_id = $scope.estado_id;
        $scope.request.details = $scope.details;
        bolsasFactory.cargamentos($scope.request).$promise.then(
            function success(response){
                ngToast.success('Los cambios en las bolsas se han registrado correctamente');
                console.log(response);
            }, function error(response){
                ngToast.danger("Se a presentado un problema con el ingreso de datos");
            }
        );

    };

    $scope.$watch('searchable', function(newVal){
        if(newVal){
            $timeout(function(){
                bolsasFactory.byCode({code: $scope.searchable}).$promise.then(
                    function success(response){
                        $scope.addBolsa(response);
                        $scope.showTable = true;
                    },
                    function error(response){
                        ngToast.warning("El codigo no existe, el servidor dice : " + response.statusText);
                        $scope.searchable = '';
                    }
                )
            }, 500);
        }
    });
};

module.exports = function(app){
    app.controller('cargamentosController', function($scope, bolsasFactory, estadosService, $timeout, ngToast){
        return cargamentos($scope, bolsasFactory, estadosService, $timeout, ngToast);
    });
};