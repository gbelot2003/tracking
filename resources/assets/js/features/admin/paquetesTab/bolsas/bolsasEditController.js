bolsas = function($scope, $http, ngToast,  $uibModal, shipmentFactory, bolsasFactory, $location, $routeParams, agenciasFactory){

	$scope.loader = {
		loading: false,
		loading2: false
	};

	$scope.agencias = {};
	$scope.sender = {};
	$scope.reciber = {};
	$scope.sender.selected = '';
	$scope.reciber.selected = '';

	$scope.loader.loading = true;

	$scope.init = function(){
		bolsasFactory.get({id:$routeParams.id}).$promise.then(
			function success(response){
				$scope.bolsa = response;
				$scope.title = $scope.bolsa.code;
				$scope.sender.selected = $scope.bolsa.sender;
				$scope.reciber.selected = $scope.bolsa.reciber;
				agenciasFactory.single({id: $scope.bolsa.establecimiento_envio_id}).$promise.then(
					function success(response){
						$scope.remitente = response;
						$scope.loader.loading = false;
					}
				);

				agenciasFactory.single({id: $scope.bolsa.establecimiento_recive_id}).$promise.then(
					function success(response){
						$scope.destinatario = response;
						$scope.loader.loading = false;
					}
				)
			},
			function error(response){
				console.log(response);		
			}                                    
		);

	};

    $scope.searchSender = function($select){
        return $http.get('/api/admin/agencias/listado-search/' + $select.search).then(function(response){
			$scope.agencias = response.data;
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
			$scope.agencias = response.data;
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


	$scope.init();

};

module.exports = function(app){
    app.controller('bolsasEditController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, bolsasFactory, $location, $routeParams, agenciasFactory){
        return bolsas($scope, $http, ngToast,  $uibModal, shipmentFactory, bolsasFactory, $location, $routeParams, agenciasFactory);
    })
};
