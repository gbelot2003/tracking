var clientes = function($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http){
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

    $scope.isEdit = true;

    $scope.loader.loading = true;

    $scope.title = "Creación de Clientes";

    $scope.clientes = {};
    $scope.agencia = {};
    $scope.seccion = {};

    /**
     * Agencias
     * @param $select
     * @returns {*}
     */
    $scope.searchAgencia = function($select){
        return $http.get('/api/admin/agencias/listado-search/' + $select.search).then(function(response){
            $scope.agencias = {};
            $scope.agencias = response.data;
            $scope.loader.loading = false;

        });
    };

    $scope.sourceAgenciasChanged = function(){
        $scope.clientes.establecimiento_id = $scope.agencia.selected.id;
    };

    /**
     * Secciones
     * @param $select
     * @returns {*}
     */
    $scope.searchSeccion = function($select) {
        return $http.get('/api/admin/secciones/listado-search/' + $select.search).then(function(response){
            $scope.secciones = {};
            $scope.secciones = response.data;
        });
    };

    $scope.sourceSeccionesChanged = function(){
        $scope.clientes.seccion_id = $scope.seccion.selected.id;
    };

    /**
     * status Users
     */
    $scope.states = [
        {id:1, name:'activo'},
        {id:2, name:'suspendido'}
    ];

    /**
     * Submit form
     */
    $scope.clienteSubmit = function(){
        clientesFactory.save($scope.clientes).$promise
            .then(function success(response){
                $location.path('/clientes');
                ngToast.success('El cliente a sido creado correctamente');
            }, function error(response){
/*                var test = _.values(response.data);
                addErrors(test);*/
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
            });
    };

};

module.exports = function(app){
  app.controller('clientesCreateController', function($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http){
      return clientes($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http);
  })
};