dash.controller('newShipmentController', function ($scope, $http, $location, ModalService){


    $scope.generateCode = function(){
      $scope.shipment.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    $http.get('/api/consultas/estados').then(function successCallback(response){
      $scope.estados = response.data;
        console.log(response)
    });

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

    $scope.$watch('shipment.sender', function (newVal, oldVal) {
        if (oldVal == newVal) return;
        $http.get('personas/' + newVal).success(function(response){
            $scope.sender = response;
        });
    }, true);


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

    $scope.$watch('shipment.reciver', function (newVal, oldVal) {
        if (oldVal == newVal) return;
        $http.get('personas/' + newVal).success(function(response){
            $scope.reciver = response;
        });
    }, true);

    /**
     * Modal Nuevos usuarios
    */

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

    $scope.profile = {
        name: '',
        establecimiento_id: '',
        seccion_id:'',
        estado_id:1
    };

    $scope.submitTrader = function(){
        console.log($scope.profile);
        $http.post("personas", $scope.profile).then(function successCallback(response){
            console.log(response);
            $scope.message = "El registro se a creado correctamente";
        }, function errorCallback(response){
            console.log(response);
        });
    };

    /**
     * Modal Establecimientos
     */
    $scope.establecimientoModal = function(){
        ModalService.showModal({
            templateUrl: '/js/dash/views/crearEstablecimiento.html',
            controller: 'CrearEstablecimientoController',
            inputs: {
                title: 'Nuevo Establecimiento'
            }
        }).then(function(modal){
            modal.element.modal();
            modal.close.then(function(result){
                if(!result.cancel){
                    $http.post("api/establecimientos/", result.establecimiento).then(function successCallback(response){
                        console.log(response.data);
                    }, function errorCallback(response){
                        console.log(response.data);
                    });
                }
            });
        });
    };

});

