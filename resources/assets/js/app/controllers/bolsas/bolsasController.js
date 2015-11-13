dash.controller('bolsasController', function($scope, $location, $routeParams){

    $scope.creating = function(){
        $location.url('/bolsas/create');
    };
});