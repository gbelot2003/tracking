usuariosCreate = function($scope, $http, $location, ngToast){

	function addErrors(data){
		$scope.errors = data;
	}

    $scope.closeAlert = function(index) {
    	$scope.errors.splice(index, 1);
  	};

	$scope.title = "Creación de Usuarios";	
	    $http.get('/api/admin/users/create').then(function success(response) {
        $scope.roles = response.data.roles;
        $scope.empresas = response.data.empresas;
        $scope.establecimientos = response.data.establecimientos;
        $scope.estado = response.data.estado;
    });


	$scope.submitUser = function(){
		$scope.userData = {
            email: $scope.user.email,
            password: $scope.user.password,
            password_confirmation: $scope.user.password_confirmation,
            name: $scope.user.name,
            establecimiento_id: $scope.user.establecimiento_id,
            empresa_id: $scope.user.empresa_id,
            userstatus_id: $scope.user.userstatus_id,
            roles: $scope.roles
        };

        var req = {
        	method: 'POST',
        	url: 'api/admin/users',
       	 	headers:{
            	'Content-Type': 'application/json'
        	},
    		data: $scope.userData
        }

    	$http(req).then(function success(response){
            $location.path('/usuarios');
            ngToast.success('El usuarios a sido creado correctamente');

        }, function error(response){
        	var test = _.values(response.data);
        	addErrors(test); 
        	ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText);	
        });    
	};	    

};

module.exports = function(app){
    app.controller('usuariosCreateController', function($scope, $http, $location, ngToast){
        return usuariosCreate($scope, $http, $location, ngToast);
    });
}