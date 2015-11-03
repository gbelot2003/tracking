dash.controller('newShipmentController', function ($scope, $http, $location, ModalService){

    $scope.name = 'Nueva encomienda';

    $scope.shipment = {};

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

    $scope.selectEstablecimientos = {
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
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/seccion',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.newUserModal = function(){
      ModalService.showModal({
          templateUrl: '/js/dash/views/newUserModal.html',
          controller: 'NewUserModalController'
      }).then(function(modal){
          modal.element.modal();
          modal.close.then(function(result){
             console.log(result);
          });
      });
    };

    $scope.establecimientoModal = function(){
        ModalService.showModal({
            templateUrl: '/js/dash/views/crearEstablecimiento.html',
            controler: "CrearEstablecimientoController"
        }).then(function(modal){
            modal.element.modal();
            modal.close.then(function(result){
                $scope.message = "You said " + result;
            })
        });
    };

    $scope.profile = {
        name: '',
        establecimiento_id: '',
        seccion_id:'',
        estado_id:1
    };

    $scope.closeEstablecimientos = function(){
        $element.modal('hide');
    };

    $scope.submitTrader = function(){
        console.log($scope.profile);
        $http.post("personas", $scope.profile).then(function successCallback(response){
            console.log(response);
        }, function errorCallback(response){
            console.log(response);
        });
        $scope.closeEstablecimientos();
    };
});

