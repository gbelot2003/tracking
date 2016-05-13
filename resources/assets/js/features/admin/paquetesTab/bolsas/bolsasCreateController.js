var bolsas = function($scope, agenciasFactory, $http, $uibModal, bolsasFactory, ngToast){
    $scope.title = "Crear Bolsa de Paquetes";
    $scope.sender = {};
    $scope.reciber = {};
    $scope.sender.selected = '';
    $scope.reciber.selected = '';
    $scope.bolsa = {};

    $scope.loader = {
        loading: false,
        loading2: false,
        loading3: false
    };

    $scope.generateCode = function(){
        $scope.bolsa.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    $scope.searchSender = function($select){
        return $http.get('/api/admin/agencias/listado-search/' + $select.search).then(function(response){
            $scope.senders = response.data;
        });
    };

    $scope.sourceSenderChanged = function(){
        $scope.bolsa.establecimiento_envio_id = $scope.sender.selected.id;
        agenciasFactory.single({id: $scope.bolsa.establecimiento_envio_id}).$promise.then(
            function success(response){
                $scope.remitente = response;
                $scope.loader.loading = false;
            }
        );
    };

    $scope.searchReciber = function($select){
        return $http.get('/api/admin/agencias/listado-search/' + $select.search).then(function(response){
            $scope.recibers = response.data;
        });
    };

    $scope.sourceReciberChanged = function(){
        $scope.bolsa.establecimiento_recive_id = $scope.reciber.selected.id;
        agenciasFactory.single({id:  $scope.bolsa.establecimiento_recive_id}).$promise.then(
            function success(response){
                $scope.destinatario = response;
                $scope.loader.loading = false;
            }
        );
    };

    $scope.agenciaModal = function(num){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./agencias-create.html'),
            controller: 'agenciasBolsasCreateController',
            backdrop: 'static'
        });

        modalInstance.result.then(function(response){
            if(num === 1){
                $scope.bolsa.establecimiento_envio_id = response.id;
                agenciasFactory.single({id: $scope.bolsa.establecimiento_envio_id}).$promise.then(
                    function success(response){
                        $scope.remitente = response;
                        $scope.sender.selected.name = response.name;
                        $scope.loader.loading = false;
                    }
                );

            } else {
                $scope.bolsa.establecimiento_recive_id = response.id;
                agenciasFactory.single({id:  $scope.bolsa.establecimiento_recive_id}).$promise.then(
                    function success(response){
                        $scope.destinatario = response;
                        $scope.reciber.selected.name = response.name;
                        $scope.loader.loading = false;
                    }
                );
            }

        });
    };

    $scope.showModal = function(id){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./transitos-show.html'),
            controller: 'transitosBolsasShowController',
            backdrop: 'static',
            resolve: {
                id: id,
                codeId : $scope.bolsa.code
            }
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a actualizado correctamente el transito');
                $scope.loader.loading3 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización.');
                $scope.loader.loading3 = false;
            }
        });
    };

    $scope.createModal = function(id){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./transitos-create.html'),
            controller: 'transitosBolsasCreateController',
            backdrop: 'static',
            resolve: {
                id: $scope.bolsa.id,
                codeId : $scope.bolsa.code
            }
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a actualizado correctamente el transito');
                $scope.loader.loading3 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización.');
                $scope.loader.loading3 = false;
            }
        });
    };

    $scope.ok = function(){
        bolsasFactory.save($scope.bolsa).$promise.then(
            function success(response){
                ngToast.success('El paquete a sido actualizado correctamente!!');

                console.log(response);
            },
            function error(response){
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización. el servidor responde ' + response);
            }
        );
    };
};

module.exports = function(app){
  app.controller('bolsasCreateController', function($scope, agenciasFactory, $http, $uibModal, bolsasFactory, ngToast){
      return bolsas($scope, agenciasFactory, $http, $uibModal, bolsasFactory, ngToast);
  });
};