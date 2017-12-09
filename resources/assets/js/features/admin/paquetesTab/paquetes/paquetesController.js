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
                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;
                $scope.loader.loading = false;
                $scope.loader.loading2 = false;
            }, function error(response){
                    console.log(response);     
            });
    };

    $scope.search = function(date, query, type, page){
        
        $scope.mSearch = true;
        
        if(query == ''){
            query = null
            $scope.mSearch = false;
        }

        $scope.loader.loading2 = true;
        shipmentFactory.query({date: date, query: query, type: type, page: page}).$promise
            .then(function success(response){
                $scope.shipments = response.data;
                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;
                $scope.loader.loading2 = false;
                console.log(response);
            });
    };

    // watcher de fechas
    $scope.$watch('dt', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $timeout(function(){
                $scope.mSearch = true;
                var item = $filter('date')($scope.dt, "yyyy-MM-dd");
                $scope.search(item, $scope.searchable, $scope.searchType);
            }, 4000);

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
            if($scope.searchType == '1' || $scope.searchType == null){
                $scope.searchable = "";
            }

            $scope.search(item, $scope.searchable, $scope.searchType);
        }
    });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.nextPage = function (pageNo) {

        $scope.loader.loading2 = true;
        $scope.currentPage = pageNo;

        if($scope.mSearch == true){
            var item = $filter('date')($scope.dt, "yyyy-MM-dd");
            $scope.search(item, $scope.searchable, $scope.searchType, $scope.currentPage);
        } else {
            shipmentFactory.get({page:$scope.currentPage}).$promise
                .then(function success(response){
                    $scope.shipments = response.data;
                    $scope.totalItems = response.total;
                    $scope.currentPage = response.current_page;
                    $scope.maxSize = response.per_page;
                    $scope.loader.loading = false;
                    $scope.loader.loading2 = false;
                    console.log(response);
                }, function error(response){

                });
        }



    };


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