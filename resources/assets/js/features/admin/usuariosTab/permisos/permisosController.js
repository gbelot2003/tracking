var permisos = function($scope, $http, permisosFactory, $uibModal, ngToast){
    $scope.title = "Permisos";

    $scope.init = function(){
    	permisosFactory.get(function(response){
        	$scope.permisos = response.data;
    	});	
    };
    $scope.init();


    $scope.showList = function(id){

		var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./show-list.html'),
            controller: 'showListController',
            backdrop: 'static',
            resolve: {
                id: id
            }
        });

    };

    $scope.editPermisos = function(id){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./permisos-edit.html'),
            controller: 'editPermisosController',
            backdrop: 'static',
            resolve: {
                id: id
            }
        });

    	modalInstance.result.then(function(message){
    		$scope.message = message;
    		if($scope.message == true){
    			ngToast.success('Se a actualizado correctamente el rol');
    			$scope.init();
    		} else {
    			ngToast.danger('A ocurrido un error en el envio, revise los datos de la actualizacion');
    		}
    	});

    };

};

module.exports = function(app){
    app.controller('permisosController', function($scope, $http, permisosFactory, $uibModal, ngToast){
        return permisos($scope, $http, permisosFactory, $uibModal, ngToast);
    });
};