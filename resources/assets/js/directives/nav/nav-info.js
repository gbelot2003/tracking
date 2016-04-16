module.exports = function(app){
    app.directive('navInfo', function(menuList, $location, authentication){
        return {
            template: require('raw!./nav.html'),
            restrict:'E',
            controller: function($scope){
                $scope.isLoggedIn = authentication.isLoggedIn;
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