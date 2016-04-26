var clientes = function($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http, $timeout){

    $scope.loader = {
        loading: false
    };

    $scope.editing = function(){
        $scope.isEdit = true;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };

    $scope.cancelar = function(){
        $location.path('/clientes');
    };

    $scope.isEdit = false;

    $scope.loader.loading = true;

    $scope.title = "Edición de Clientes";

    $scope.clientes = clientesFactory.get({id:$routeParams.id}).$promise.then(function success(response){
        $scope.clientes = response.cliente;
        $scope.agencias = response.agencias;
        $scope.loader.loading = false;
    });

    $scope.searchRes = [];

    $scope.searchMedia = function($select) {
        return $http.get('/api/admin/secciones/listado-search/' + $select.search).then(function(response){
            $scope.searchRes = response.data;
        });
    };


};

module.exports = function(app){
    app.controller('clientesEditController', function($scope, clientesFactory, seccionesFactory,  $routeParams, $location, ngToast, $http, $timeout){
        return clientes($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http, $timeout);
    });
};