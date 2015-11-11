dash.controller('NewUserModalController', function($scope, $http, $element, profileCreater, close, ModalService){

    $scope.profileCreater = profileCreater;
    if($scope.profileCreater === 'sender'){
        $scope.title = "Remitente";
    } else {
        $scope.title = "Destinatario"
    }

    $scope.profile = {
        name: '',
        establecimiento_id: '',
        seccion_id:'',
        estado_id:1
    };

    /**
     * Creando modal de Establecimientos
     */
    $scope.establecimiento_nombre = '';
    $scope.createEstablecimiento = function(){
      ModalService.showModal({
          templateUrl: '/js/dash/views/crearEstablecimiento.html',
          controller: 'CrearEstablecimientoController'
      }).then(function(modal){
          modal.element.modal();
          modal.close.then(function(result){
              $scope.establecimiento_nombre = result.establecimiento_nombre;
              $scope.profile.establecimiento_id = result.establecimiento_id;
              console.log($scope.establecimiento_nombre);
          });
      });
    };


    /**
     * Estableciendo Select2 para establecimientos y Secciones
     * @type {{allowClear: boolean, ajax: {cache: boolean, datType: string, url: string, results: Function}}}
     */
    $scope.selectEstablecimientos = {
        allowClear:true,
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/establecimiento',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.selectSeccion = {
        allowClear:true,
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/seccion',
            results: function(data){
                return {results: data}
            }
        }
    };


    /**
     * Submit info y enviando scope a newShipmentController
     */
    $scope.submitTrader = function(){
        $http.post("personas", $scope.profile).then(function successCallback(response){
            $scope.message = "El registro se a creado correctamente";
            $scope.profile = response.data;
        }, function errorCallback(response){
            $scope.message = "Error en la creacion del perfil!!";
            console.log(response.data);
        });
    };

    $scope.close = function() {
        $element.modal('hide');
        close({
            profile: $scope.profile.id
        }, 500); // close, but give 500ms for bootstrap to animate
    };

});