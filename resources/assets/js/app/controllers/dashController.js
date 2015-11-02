dash.controller('dashController', function($scope, $location, $http, $filter, $route){
    $scope.loading = false;
    $scope.dates = new Date();
    $scope.route = $route;

    $scope.show = function(id){
        $location.url('/shipment/' + id);
    };

    $scope.searchByDate = function (dates){
        $scope.loading = true;
        var tdate = dates;
        var item = $filter('date')(tdate, "yyyy-MM-dd");
        $http.get("api/consultas/shipment-by-date/" + item).then(
            function(responce){
                $scope.shipments = responce.data;
            }).finally(
            function(){
                $scope.loading = false;
            }
        );
    };

    $scope.predicate = 'estado';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
});