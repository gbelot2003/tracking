var cargamentos = function($scope, bolsasFactory, estadosService, $timeout, ngToast){
    $scope.loader = {
        loading: false,
        loading2: false
    };
    $scope.bolsas = [];
    $scope.loader.loading = false;
    $scope.title = "Cargamentos";
    $scope.showTable = false;


    $scope.$watch('searchable', function(newVal){

        if(newVal){
            $timeout(function(){
                bolsasFactory.byCode({code: $scope.searchable}).$promise.then(
                    function success(response){
                        $scope.bolsas.push(response);
                        console.log($scope.bolsas);
                        $scope.searchable = '';
                    },
                    function error(response){
                        ngToast.warning("El codigo no existe, el servidor dice : " + response.statusText);
                        $scope.searchable = '';
                    }
                )
            }, 1000);
        }
    });
};

module.exports = function(app){
    app.controller('cargamentosController', function($scope, bolsasFactory, estadosService, $timeout, ngToast){
        return cargamentos($scope, bolsasFactory, estadosService, $timeout, ngToast);
    });
};