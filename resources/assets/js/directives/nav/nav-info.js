module.exports = function(app){
    app.directive('navInfo', function(menuList, $location, auth){
        return {
            template: require('raw!./nav.html'),
            restrict:'E',
            controller: function($scope){
                $scope.isLoggedIn = auth.isLoggedIn;
                $scope.menus = menuList;

                $scope.logout = function(){
                    localStorage.removeItem('satellizer_token');
                    localStorage.removeItem('user');
                    localStorage.removeItem('rol');
                    $location.path('/login');
                }
            }
        }
    })
};