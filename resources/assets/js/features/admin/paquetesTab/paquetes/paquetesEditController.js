var paquetes = function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams, clientesFactory){

    $scope.sender = {};
    $scope.reciber = {};
    $scope.sender.selected = '';
    $scope.reciber.selected = '';
    $scope.isEdit = false;

    // Inicio de loaders
    $scope.loader = {
        loading: false,
        loading2: false,
        loading3: false
    };

    $scope.loader.loading = true;

    $scope.init = function(){
    	shipmentFactory.get({id:$routeParams.id}).$promise
    		.then(function success(response){
    			$scope.shipment = response;
                $scope.title = response.code;
                $scope.sender.selected = response.senders;
                $scope.reciber.selected = response.recivers;
                console.log(response.senders);
    		
                clientesFactory.get({id:$scope.shipment.sender_id}).$promise.then(
                    function success(response){
                        $scope.remitente = response.cliente;
                    },
                    function error(response){
                        ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
                        console.log(response);
                    }
                );

                clientesFactory.get({id:$scope.shipment.reciber_id}).$promise.then(
                    function success(response){
                        $scope.destinatario = response.cliente;
                        $scope.loader.loading = false;
                        $scope.loader.loading3 = false;
                    },
                    function error(response){
                        ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
                        console.log(response);
                    }
                );

            }, function error(){
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
    		});
    };

    /**
     * Sender
     * @param $select
     * @returns {*}
     */
    $scope.searchSenders = function($select){
        return $http.get('/api/admin/clientes/listado-search/' + $select.search).then(function(response){
            $scope.senders = response.data;
            $scope.loader.loading = false;
        });
    };

    $scope.sourceSenderChanged = function(){
        $scope.shipment.sender_id = $scope.sender.selected.id;
        clientesFactory.get({id:$scope.sender.selected.id}).$promise.then(
            function success(response){
                $scope.remitente = response.cliente;
            },
            function error(response){
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
                console.log(response);
            }
        );
    };

    /**
     * Reciber
     * @param $select
     * @returns {*}
     */
    $scope.searchReciber = function($select){
        return $http.get('/api/admin/clientes/listado-search/' + $select.search).then(function(response){
            $scope.recibers = response.data;
        });
    };

    $scope.sourceReciberChanged = function(){
        $scope.shipment.reciber_id = $scope.reciber.selected.id;
        clientesFactory.get({id:$scope.reciber.selected.id}).$promise.then(
            function success(response){
                $scope.destinatario = response.cliente;
            },
            function error(response){
                ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
                console.log(response);
            }
        );
    };

    $scope.senderModal = function(num){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./sender-create.html'),
            controller: 'senderCreateController',
            backdrop: 'static',
            size: 'lg',
            resolve:{
                num: num
            }
        });

        modalInstance.result.then(function success(response){
            if(num === 1){
                $scope.showSenderName = true;
                $scope.senderName = response.name;
                $scope.shipment.sender_id = response.id
            } else {
                $scope.showReciberName = true;
                $scope.reciberName = response.name;
                $scope.shipment.reciber_id = response.id
            }
        });
    };

    $scope.createModal = function(){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./transitos-create.html'),
            controller: 'transitosCreateController',
            backdrop: 'static',
            resolve:{
                shipId: $scope.shipment.code,
                id: $scope.shipment.id
            }
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a creado correctamente el transito');
                $scope.loader.loading3 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización.');
                $scope.loader.loading3 = false;
            }
        });

    };

    $scope.editModal = function(id){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./transitos-edit.html'),
            controller: 'transitosEditController',
            backdrop: 'static',
                resolve: {
                    id: id,
                    shipId : $scope.shipment.code
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
        shipmentFactory.update($scope.shipment).$promise.then(
            function success(response){
                ngToast.success('El paquete a sido actualizado correctamente!!');
                $location.path('/paquetes');
            },
            function error(response){
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización. el servidor responde ' + response);
            }
        );
    };

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };
    
    $scope.init();

};

module.exports = function(app){
    app.controller('paquetesEditController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams, clientesFactory){
        return paquetes($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams, clientesFactory);
    })
};
