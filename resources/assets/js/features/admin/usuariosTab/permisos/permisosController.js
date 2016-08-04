var permisos = function($scope, $http, permisosFactory, $uibModal, ngToast){
    
    $scope.loader = {
        loading: false,
    };

    $scope.title = "Permisos";

    $scope.init = function(){
        $scope.loader.loading = true;
    	permisosFactory.get(function(response){
        	$scope.permisos = response.data;
            $scope.loader.loading = false;
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
    			ngToast.success('El permiso se a actualizado correctamente!!');
    			$scope.init();
    		} else {
    			ngToast.danger('A ocurrido un error en la actualización del permiso');
    		}
    	});

    };

};

module.exports = function(app){
    app.controller('permisosController', function($scope, $http, permisosFactory, $uibModal, ngToast){
        return permisos($scope, $http, permisosFactory, $uibModal, ngToast);
    });
};