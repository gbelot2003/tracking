dash.controller('CrearEstablecimientoController', function($scope, $http, $element, close){

    $scope.title = "Nuevo Establecimiento";
    $scope.establecimiento = {};
    $scope.departamentos = [{"id": 1,"departamento": "Atlántida"}, {"id": 2,"departamento": "Colón"}, {"id": 3,"departamento": "Comayagua"}, {"id": 4,"departamento": "Copán"}, {"id": 5,"departamento": "Cortés"}, {"id": 6,"departamento": "Choluteca"}, {"id": 7,"departamento": "El Paraíso"}, {"id": 8,"departamento": "Francisco Morazán"}, {"id": 9,"departamento": "Gracias a Dios"}, {"id": 10,"departamento": "Intibucá"}, {"id": 11,"departamento": "Islas de la Bahía"}, {"id": 12,"departamento": "La Paz"}, {"id": 13,"departamento": "Lempira"}, {"id": 14,"departamento": "Ocotepeque"}, {"id": 15,"departamento": "Olancho"}, {"id": 16,"departamento": "Santa Bárbara"}, {"id": 17,"departamento": "Valle"}, {"id": 18,"departamento": "Yoro"}]
    $http.get('listados/empresas').success(function(response){
        $scope.empresas = response;
    });

    $scope.$watch('establecimiento.departamento_id', function (newVal, oldVal) {
        if (oldVal == newVal) return;
        $http.get('listados/municipios/' + newVal).success(function(response){
            $scope.municipios = response;
        });
    }, true);

    /**
     * Submit establecimiento
     */
    $scope.submitEstablecimiento = function(){
        $http.post('api/establecimientos', $scope.establecimiento).then(function successCallback(response){
            $scope.messageEstablecimiento = "Establecimiento enviado";
            $scope.establecimiento = response.data;
        });
    };

    $scope.dismissModal = function() {
        $element.modal('hide');
        close({
            establecimiento_id: $scope.establecimiento.id,
            establecimiento_nombre: $scope.establecimiento.name
        }, 200)
    };
});