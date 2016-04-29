var sender = function($scope, $uibModal, $uibModalInstance, $http, num, clientesFactory){

    $scope.clientes = {};

    $scope.agencia = {};

    $scope.secciones = [];

    $scope.seccion = {};

    $scope.loader = {
        loading: false
    };

    $scope.showNewAgency = false;

    $scope.showNewSeccion = false;

    $scope.establecimientoName = '';

    $scope.seccionName = '';

    $scope.type = function(num){
        if(num === 1){
            $scope.title = "Registro de Remitente";
        } else {
            $scope.title = "Registro de Destinatario";
        }
    };

    $scope.type(num);

    $scope.isEdit = false;

    $scope.loader.loading = true;

    /**
     * Form Functions
     */


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
     * Modal Functions
     */

    $scope.agenciaCreate = function(){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./agencias-create.html'),
            controller: 'paquetesAgenciasController',
            backdrop: 'static'
        });

        modalInstance.result.then(function(agencia){
            $scope.clientes.establecimiento_id = agencia.id;
            $scope.establecimientoName = agencia.name;
            $scope.showNewAgency = true;
        });
    };


    $scope.seccionCreate = function(){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./seccion-create.html'),
            controller: 'paquetesSeccionesController',
            backdrop: 'static'
        });

        modalInstance.result.then(function(seccion){
            $scope.clientes.seccion_id = seccion.id;
            $scope.seccionName = seccion.name;
            $scope.showNewSeccion = true;

        });
    };

    $scope.ok = function () {
        clientesFactory.save($scope.clientes).$promise
            .then(function success(response){
                $scope.clientes.id = response.id;
                $uibModalInstance.close($scope.clientes);
            }, function error(response){
                $uibModalInstance.close(response);
            });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};

module.exports = function(app){
    app.controller('senderCreateController', function($scope, $uibModal, $uibModalInstance, $http, num, clientesFactory){
        return sender($scope, $uibModal, $uibModalInstance, $http, num, clientesFactory);
    })
};

