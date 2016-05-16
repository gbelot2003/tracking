var listados = function($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast){

    $scope.shipments = [];
    $scope.listaCodigos = [];

    $scope.loader = {
        loading: false,
        loading2: false,
        loading3: false
    };

    $scope.loader.loading = true;

    $scope.init = function(){
        bolsasFactory.get({id: $routeParams.id}).$promise.then(
            function success(response){
                $scope.bolsa = response;
                $scope.title = response.code;
                $scope.loader.loading = false;
                angular.forEach($scope.bolsa.shipments, function(e){
                    $scope.listaCodigos.push(e.code);
                });
            },
            function error(response){

                console.log(response)
            }
        )
    };

    var pusher = new Pusher('17ccb306ef6fff721e51', {
        encrypted: true
    });

    var channel = pusher.subscribe('channel-' + $routeParams.id);

    channel.bind('event', function(data) {
        $scope.shipments.push(data.paquete);
        $scope.listaCodigos.push(data.paquete.code);
        $scope.$apply();
    });

    $scope.getShipment = function(){
        console.log($scope.listaCodigos);
        var isNoInBag = _.contains($scope.listaCodigos, $scope.codigos);
        if(isNoInBag === false){
            shipmentFactory.byCode({code: $scope.codigos, bag: $routeParams.id}).$promise.then(
                function success(response){
                    $scope.codigos = '';
                },
                function error(response){
                    ngToast.danger('Se a probocado un error, la respuesta del server es ' + response.status + " - " + response.statusText + '<br/>'
                                    + "Posiblemente el numero de paquete esta mal ingresado, reviselo de nuevo");
                    $scope.codigos = '';
                }
            );
        } else {
            ngToast.warning('Ese paquete ya a sido registrado en la bolsa');
        }


    };

    $scope.init();

};

module.exports = function(app){
    app.controller('bolsasListadoController', function($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast){
        return listados($scope, bolsasFactory, shipmentFactory, $location, $routeParams, ngToast)
    });
};