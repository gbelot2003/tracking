dash.controller('crearSeccionController', function($scope, $http, $element, close){
    $scope.messageSeccion ='';
    $scope.title = 'Nueva Sección';
    $scope.seccion = {};

    /**
     * Validación
     */
    $scope.validacion = function(){
        if(!$scope.seccion.name){
            return true;
        }
        return false;
    };

    $scope.submitSeccion = function(){
      $http.post('api/secciones', $scope.seccion).then(function successCallback(response){
          ngToast.success({
              content: 'La sección se a creado exitosamente!!'
          });
          $scope.seccion = response.data;
          $scope.close();
      }, function errorCallback(response){
          $element.modal('hide');
          ngToast.warning({
              content: 'Se a producido un error en la introducción de esta información'
          });
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