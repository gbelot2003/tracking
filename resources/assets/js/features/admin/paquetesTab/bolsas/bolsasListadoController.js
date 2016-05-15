var listados = function($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast){

    $scope.init = function(){
        bolsasFactory.get({id: $routeParams.id}).$promise.then(
            function success(response){
                $scope.bolsa = response;
                $scope.title = response.code;
                console.log(response);
            },
            function error(response){
                console.log(response)
            }
        )
    };

    $scope.init();

};

module.exports = function(app){
    app.controller('bolsasListadoController', function($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast){
        return listados($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast)
    });
};