bolsas = function($scope, $http, ngToast,  $uibModal, bolsasFactory, $location, $routeParams, agenciasFactory){

	$scope.sender = {};
	$scope.reciber = {};
	$scope.sender.selected = '';
	$scope.reciber.selected = '';

	$scope.loader = {
		loading: false,
		loading2: false,
		loading3: false
	};

	$scope.loader.loading = true;

	$scope.init = function(){
		bolsasFactory.get({id:$routeParams.id}).$promise.then(
			function success(response){
				$scope.bolsa = response;
				$scope.title = $scope.bolsa.code;
				$scope.sender.selected = response.sender;
				$scope.reciber.selected = response.reciber;
				console.log(response);

				agenciasFactory.single({id: $scope.bolsa.establecimiento_envio_id}).$promise.then(
					function success(response){
						$scope.remitente = response;
						$scope.loader.loading = false;
						$scope.loader.loading3 = false;
					}
				);

				agenciasFactory.single({id: $scope.bolsa.establecimiento_recive_id}).$promise.then(
					function success(response){
						$scope.destinatario = response;
						$scope.loader.loading = false;
						$scope.loader.loading3 = false;
					}
				)
			},
			function error(response){
				ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);
				console.log(response);		
			}                                    
		);

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
		bolsasFactory.update($scope.bolsa).$promise.then(
			function success(response){
				ngToast.success('El paquete a sido actualizado correctamente!!');
				$scope.unEdit();
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
    app.controller('bolsasEditController', function($scope, $http, ngToast,  $uibModal, bolsasFactory, $location, $routeParams, agenciasFactory){
        return bolsas($scope, $http, ngToast,  $uibModal, bolsasFactory, $location, $routeParams, agenciasFactory);
    })
};
