module.exports = function(app){
    app.directive('navInfo', function($location, authentication, permService){
        return {
            template: require('raw!./nav.html'),
            restrict:'AE',
            controller: function($scope){
                $scope.isLoggedIn = authentication.isLoggedIn;

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