module.exports = function(app){
    app.directive('navInfo', function(menuList, $location, authentication, permService){
        return {
            template: require('raw!./nav.html'),
            restrict:'E',
            controller: function($scope){
                $scope.isLoggedIn = authentication.isLoggedIn;
                $scope.menus = menuList;

                $scope.logout = function(){
                    localStorage.removeItem('satellizer_token');
                    localStorage.removeItem('user');
                    permService.permissionModel.isPermissionLoaded = false;
                    $location.path('/login');
                }
            }
        }
    })
};