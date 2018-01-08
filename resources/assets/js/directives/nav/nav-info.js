module.exports = function(app){
    app.directive('navInfo', function($location, authentication, permService){
        return {
            template: require('raw!./nav.html'),
            restrict:'AE',
            controller: function($scope){
                var name = null;
                $scope.usuario = null;
                obj = null;

                $scope.isLoggedIn = authentication.isLoggedIn;
                var name = localStorage.getItem('user');
                if (name != null){
                    obj = JSON.parse(name);
                    $scope.usuario = obj.name;
                }

                $scope.logout = function(){
                    localStorage.removeItem('satellizer_token');
                    localStorage.removeItem('user');
                    localStorage.removeItem('rol');
                    permService.permissionModel.isPermissionLoaded = false;

                    $location.path('/login');
                }             
            }
        }
    })
};