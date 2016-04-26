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

    $scope.clientes = clientesFactory.get({id:$routeParams.id})
        .$promise
            .then(function success(response){
                $scope.clientes = response.cliente;
                $scope.agencias = response.agencias;
                $scope.loader.loading = false;

                $scope.seccion = {};
                $scope.seccion.selected = $scope.clientes.seccion;
            });

    $scope.searchMedia = function($select) {
        return $http.get('/api/admin/secciones/listado-search/' + $select.search).then(function(response){
            $scope.secciones = response.data;
        });
    };

    $scope.sourceChanged = function(){
        $scope.clientes.seccion_id = $scope.seccion.selected.id;
    }
      

};

module.exports = function(app){
    app.controller('clientesEditController', function($scope, clientesFactory, seccionesFactory,  $routeParams, $location, ngToast, $http, $timeout){
        return clientes($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http, $timeout);
    });
};