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
    //
    //$scope.searchRes = [];
    //
    //$scope.searchMedia = function($select) {
    //    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
    //        params: {
    //            address: $select.search,
    //            sensor: false
    //        }
    //    }).then(function(response){
    //        $scope.searchRes = response.data.results;
    //    });
    //};

    //$scope.$watch('clientes.establecimiento_id', function (newVal, oldVal) {
    //    if (oldVal == newVal) return;
    //    $http.get('/api/admin/secciones/id-search/' + newVal).success(function(response){
    //        $scope.municipios = response;
    //    }).error(function(response){
    //        ngToast.warning({
    //            content: 'A habido un error al tratar de cargar el listado de municipios'
    //        });
    //    });
    //}, true);

    //$scope.secciones = seccionesFactory.query();

};

module.exports = function(app){
    app.controller('clientesEditController', function($scope, clientesFactory, seccionesFactory,  $routeParams, $location, ngToast, $http, $timeout){
        return clientes($scope, clientesFactory, seccionesFactory, $routeParams, $location, ngToast, $http, $timeout);
    });
};