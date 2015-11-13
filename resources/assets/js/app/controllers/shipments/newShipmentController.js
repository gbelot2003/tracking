dash.controller('newShipmentController', function ($scope, $http, $location, ModalService, ngToast){

    $scope.profileCreater = null;

    $scope.EstablecimientoCreated = false;

    $scope.generateCode = function(){
      $scope.shipment.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    $http.get('/api/consultas/estados').then(function successCallback(response){
      $scope.estados = response.data;
    });

    $scope.shipment = {};

    /**
     * Select2 Sender
     * @type {{ajax: {cache: boolean, datType: string, url: string, results: Function}}}
     */
    $scope.selectTradersSender = {
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/trader',
            results: function(data){
                return {results: data}
            }
        }
    };


    $scope.$watch('shipment.sender_id', function (newVal, oldVal) {
        if (oldVal == newVal) return;
        $http.get('personas/' + newVal).success(function(response){
            $scope.sender = response;
        });
    }, true);


    /**
     * Select2 Reciver
     * @type {{ajax: {cache: boolean, datType: string, url: string, results: Function}}}
     */
    $scope.selectTradersReciver = {
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/trader',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.$watch('shipment.reciber_id', function (newVal, oldVal) {
        if (oldVal == newVal) return;
        $http.get('personas/' + newVal).success(function(response){
            $scope.reciber = response;
        });
    }, true);

    /**
     * Modal Nuevos usuarios
    */

    $scope.newUserModal = function(tipo){

      if(tipo === 'sender'){
        $scope.profileCreater = 'sender';
      }else {
        $scope.profileCreater = 'reciber';
      }

      ModalService.showModal({
          templateUrl: '/js/dash/views/shipments/modals/newUserModal.html',
          controller: 'NewUserModalController',
          inputs: {
              profileCreater: $scope.profileCreater
          }
      }).then(function(modal){
          modal.element.modal();
          modal.close.then(function(result){
              if($scope.profileCreater === 'sender'){
                $scope.shipment.sender_id = result.profile;
              } else {
                $scope.shipment.reciber_id = result.profile;
              }
          });
      });
    };

    /**
     * Validación pre envio de formulario
     */

    $scope.validacion = function(){

        if(!$scope.shipment.code || !$scope.shipment.sender_id || !$scope.shipment.reciber_id){
            return true;
        }
        return false;
    };

    /**
     * create shipment
     */

    $scope.createShipment = function(){
        $http.post('api/shipments', $scope.shipment).then(function successCallback(response){
            $location.url('/');
            ngToast.success({
                content: '<a href="#">La encomieda se a creado exitosamente</a>'
            });

        }, function errorCallback(response){
            ngToast.warning({
                content: '<a href="#" class="">Se a producido un error en la introducción de esta información</a>'
            });
        });
    };

    $scope.shipmentCancel = function(){
            $location.url('/');
    };

});

