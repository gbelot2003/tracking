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