user = function ($scope, $http, $routeParams, $location, ngToast) {

    function addErrors(data){
        $scope.errors = data;
    }

    $scope.closeAlert = function(index) {
        $scope.errors.splice(index, 1);
    };

    $http.get('/api/admin/users/' + $routeParams.id + '/edit').then(function success(response) {
        $scope.user = response.data.user;
        $scope.roles = response.data.roles;
        $scope.empresas = response.data.empresas;
        $scope.establecimientos = response.data.establecimientos;
        $scope.estado = response.data.estado;

        angular.forEach($scope.user.roles, function(e){
            this.push(e.id );
        }, $scope.user.roles);
    });

    $scope.changeItem = function(roles){
        $scope.role = roles;
    };


    $scope.submitUser = function(){

        $scope.userData = {
            email: $scope.user.email,
            password: $scope.user.password,
            password_confirmation: $scope.user.password_confirmation,
            name: $scope.user.name,
            establecimiento_id: $scope.user.establecimiento_id,
            empresa_id: $scope.user.empresa_id,
            userstatus_id: $scope.user.userstatus_id,
            roles_lists: $scope.role
        };

        var req = {
            method:'PUT',
            url: 'api/admin/users/' + $routeParams.id,
            headers:{
                'Content-Type': 'application/json'
            },
            data: $scope.userData
        };

        $http(req).then(function success(response){
            $location.path('/usuarios');
            ngToast.success('El usuarios a sido <strong>actualizado</strong> correctamente');

        }, function error(response){
            var test = _.values(response.data);
            addErrors(test); 
            ngToast.danger('A ocurrido un error, el servidor responde ' + response.statusText)
    
        });
    };

    
};

module.exports = function(app){
    app.controller('usuariosEditController', function($scope, $http, $routeParams, $location, ngToast){
        return user($scope, $http, $routeParams, $location,  ngToast);
    });
}