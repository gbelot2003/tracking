dash.controller('crearSeccionController', function($scope, $http, $element, close){
    $scope.messageSeccion ='';
    $scope.title = 'Nueva Sección';
    $scope.seccion = {};

    $scope.submitSeccion = function(){
      $http.post('api/secciones', $scope.seccion).then(function successCallback(response){
          $scope.seccion = response.data;
          $scope.close();
      });
    };

    $scope.close = function(){
        $element.modal('hide');
        close({
            seccion_id: $scope.seccion.id,
            seccion_nombre: $scope.seccion.name
        }, 500);
    }
});