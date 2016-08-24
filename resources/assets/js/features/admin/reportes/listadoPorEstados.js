var listadoPorEstados = function($scope, $filter, $timeout, reportesFactory, estadosService){

    $scope.title = "Listado General Por Estado";

    $scope.search = {};

    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.showTable = false;


    $scope.estados = estadosService.estados_general;

    $scope.changeItem = function(estado)
    {
        $scope.estados_id = estado;
    };

    var datef = new Date();
    var month = datef.getMonth();
    var year = datef.getFullYear();

    $scope.date1 = new Date(year, month, 1);
    $scope.date2 = new Date();
    $scope.bDate = $filter('date')($scope.date1, "yyyy-MM-dd");
    $scope.eDate = $filter('date')($scope.date2, "yyyy-MM-dd");
    $scope.rec = {};
    $scope.results = {};

    // Formato de fechas
    $scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    // watcher de fechas
    $scope.$watch('date1', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $scope.mSearch = true;
            $scope.bDate = $filter('date')($scope.date1, "yyyy-MM-dd");
        }
    });

    // watcher de fechas
    $scope.$watch('date2', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $scope.mSearch = true;
            $scope.eDate = $filter('date')($scope.date2, "yyyy-MM-dd");
        }
    });

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.clear = function() {
        $scope.date1 = new Date(year, month, 1);
        $scope.date2 = new Date();
        $scope.bDate = $filter('date')($scope.date1, "yyyy-MM-dd");
        $scope.eDate = $filter('date')($scope.date2, "yyyy-MM-dd");
        $scope.search = {};
        $scope.showTable = false;
    };

    $scope.pagination = {
        currentPage: 1,
        maxSize: 10,
        totalItems : 20
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.nextPage = function(pageNo){
        $scope.loader.loading2 = true;
        $scope.currentPage = pageNo;
        reportesFactory.listadoPorPaquete({bDate:$scope.search.bDate, eDate: $scope.search.eDate})
            .$promise.then(
            function success(response){
                $scope.results = response;
                console.log(response);

                $scope.pagination.totalItems = response.total;
                $scope.pagination.currentPage = response.current_page;
                $scope.pagination.maxSize = response.per_page;

                $scope.showTable =true;
                $scope.loader.loading2 = false;

            },
            function error(response){
                console.log(response.error)
            }
        );
    };

    $scope.sendData = function() {
        $scope.loader.loading2 = true;
        $scope.search.bDate = $scope.bDate;
        $scope.search.eDate = $scope.eDate;

        reportesFactory.listadoPorPaquete({bDate:$scope.search.bDate, eDate: $scope.search.eDate, estado: $scope.estados_id})
            .$promise.then(
            function success(response){
                $scope.results = response;
                console.log(response);

                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;

                $scope.showTable =true;
                $scope.loader.loading2 = false;

            },
            function error(response){
                console.log(response.error)
            }
        )

    }

};

module.exports = function(app){
    app.controller('listadoPorEstados', function($scope, $filter, $timeout, reportesFactory, estadosService){
        return listadoPorEstados($scope, $filter, $timeout, reportesFactory, estadosService);
    });
};