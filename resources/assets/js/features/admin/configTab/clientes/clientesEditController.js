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

    $scope.isEdit = false;

    $scope.loader.loading = true;

    $scope.title = "Edición de Clientes";

    /**
     * Carga de cliente
     */
    $scope.clientes = clientesFactory.get({id:$routeParams.id})
        .$promise
            .then(function success(response){
                $scope.clientes = response.cliente;
                $scope.agencias = response.agencias;
                $scope.loader.loading = false;

                $scope.seccion = {};
                $scope.agencia = {};

                $scope.seccion.selected = $scope.clientes.seccion;
                $scope.agencia.selected = $scope.clientes.establecimiento;
            });

    /**
     * Agencias
     * @param $select
     * @returns {*}
     */
    $scope.searchAgencia = function($select){
        return $http.get('/api/admin/agencias/listado-search/' + $select.search).then(function(response){
            $scope.agencias = {};
            $scope.agencias = response.data;
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
        this.editedCliente = {
            id: $scope.clientes.id,
            establecimiento_id: $scope.clientes.establecimiento_id,
            seccion_id: $scope.clientes.seccion_id,
            name: $scope.clientes.name,
            userstatus_id: $scope.clientes.userstatus_id

        };
        console.log(this.editedCliente)
    };


};

module.exports = function(app){
    app.controller('clientesEditController', function($scope, clientesFactory, seccionesFactory,  $routeParams, $location, ngToast, $http){
        return clientes($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http);
    });
};