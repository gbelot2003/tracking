var paquetes = function($scope, shipmentFactory, $filter, $timeout){

    // Inicio de loaders
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.mSearch = false;

    // Campo de texto
    $scope.searchable = null;

    // loader principal
    $scope.loader.loading = true;

    $scope.title = "Paquetes";

    // Tipo de busqueda
    $scope.searchType = null;

    // Formato de fechas
    $scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.altInputFormats = ['M!/d!/yyyy'];


    $scope.popup1 = {
        opened: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    // Funcion de inicio
    $scope.init = function(){
        $scope.mSearch = false;
        shipmentFactory.get().$promise
            .then(function success(response){
                $scope.shipments = response.data;
                $scope.loader.loading = false;
                console.log(response);
            }, function error(response){

            });

    };

    // operación de busqueda
    $scope.search = function(date, query, type){
        if(query === ''){
            query = null
        }
        $scope.loader.loading2 = true;
        shipmentFactory.query({date: date, query: query, type: type}).$promise
            .then(function success(response){
                $scope.shipments = response.data;
                $scope.loader.loading2 = false;
                console.log(response);
            });
    };

    // watcher de fechas
    $scope.$watch('dt', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            var item = $filter('date')($scope.dt, "yyyy-MM-dd");
            $scope.search(item, $scope.searchable, $scope.searchType);
        }
    });

    // watcher de fechas
    $scope.$watch('searchable', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $timeout(function(){
                var item = $filter('date')($scope.dt, "yyyy-MM-dd");
                $scope.search(item, $scope.searchable, $scope.searchType);
            }, 2000)

        }
    });

    // watcher de fechas
    $scope.$watch('searchType', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            var item = $filter('date')($scope.dt, "yyyy-MM-dd");
            if($scope.searchType == '1'){
                $scope.searchable = "";
            }

            $scope.search(item, $scope.searchable, $scope.searchType);
        }
    });




    // Funcion today
    $scope.today = function() {
        $scope.dt = new Date();
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.today();
    $scope.init();

};

module.exports = function(app){
    app.controller('paquetesController', function($scope, shipmentFactory, $filter, $timeout){
        return paquetes($scope, shipmentFactory, $filter, $timeout);
    });
};