dash.controller('ShipmentShowController', function($scope, shipments, $location, $routeParams){
    $scope.shipment = shipments.get({id: $routeParams.id });
});