var paquetes = function($scope, shipmentFactory, $filter){

    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.shipments = {};
    $scope.loader.loading = true;

    $scope.title = "Paquetes";

    $scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.today = function() {
        $scope.dt = new Date();
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };


    $scope.popup1 = {
        opened: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };


    $scope.init = function(){
        shipmentFactory.get().$promise
            .then(function success(response){
                $scope.shipments = response.data;
                $scope.loader.loading = false;
            }, function error(response){

            });

    };

    // operación de busqueda
    $scope.search = function(date, query){
        $scope.loader.loading2 = true;
        shipmentFactory.query({query: query, date: date}).$promise
            .then(function success(response){
                $scope.shipments = response.data;
                $scope.loader.loading2 = false;

            });
    };

    // watcher de fechas
    $scope.$watch('dt', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            var item = $filter('date')($scope.dt, "yyyy-MM-dd");
            $scope.search(item);
        }
    });


    $scope.today();
    $scope.init();
};

module.exports = function(app){
    app.controller('paquetesController', function($scope, shipmentFactory, $filter){
        return paquetes($scope, shipmentFactory, $filter);
    });
};