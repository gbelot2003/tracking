dash.controller('CrearEstablecimientoController', [
    '$scope','$http', '$element', 'title', 'close',
    function($scope, $http, $element, title,  close){

        $scope.title = title;
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

        $scope.close = function() {
            close({
                establecimiento: $scope.establecimiento
            }, 500); // close, but give 500ms for bootstrap to animate
        };

        $scope.cancel = function() {
            //  Manually hide the modal.
            $element.modal('hide');

            //  Now call close, returning control to the caller.
            close({
                cancel: true
            }, 500); // close, but give 500ms for bootstrap to animate
        };

    }
]);