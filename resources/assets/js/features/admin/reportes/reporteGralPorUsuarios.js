var reportes = function($scope, $filter, $http, ngToast, estadosService, reportesFactory){

    $scope.search = {};

    $scope.showTable = false;

    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.title = "Resportes por Usuarios";

    $scope.estados = estadosService.estados_general;

    $scope.searchUser = function($select){
        return $http.get('/api/admin/users/searchbox/' + $select.search).then(function(response){
            $scope.users = response.data;
        });
    };

    $scope.sourceUsuarioChanged = function($select){
        $scope.search.id = $select.selected.id;
    };

    $scope.currentPage = 1;


    var datef = new Date();
    var month = datef.getMonth();
    var year = datef.getFullYear();

    $scope.date1 = new Date(year, month, 1);
    $scope.date2 = new Date();
    $scope.bDate = $filter('date')($scope.date1, "yyyy-MM-dd");
    $scope.eDate = $filter('date')($scope.date2, "yyyy-MM-dd");

    // Formato de fechas
    $scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];


    // watcher de fechas
    $scope.$watch('date1', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $scope.bDate = $filter('date')($scope.date1, "yyyy-MM-dd");

        }
    });

    // watcher de fechas
    $scope.$watch('date2', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
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
        $scope.users.selected = undefined;
    };

    $scope.pagination = {
        currentPage: 1,
        maxSize: 5,
        totalItems : 20
    };


    $scope.sendData = function() {
        $scope.loader.loading2 = true;
        $scope.search.bDate = $scope.bDate;
        $scope.search.eDate = $scope.eDate;

        reportesFactory.query({bDate:$scope.search.bDate, eDate: $scope.search.eDate, id:$scope.search.id})
            .$promise.then(
            function success(response){
                console.log(response);
                $scope.results = response;

                $scope.pagination = {
                    currentPage: response.current_page,
                    maxSize: 5,
                    totalItems : response.total,
                    numPages: response.last_page
                };
                console.log($scope.pagination);
                $scope.showTable =true;
                $scope.loader.loading2 = false

            },
            function error(response){
                consolo.log(response.error)
            }
        )
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.nextPage = function(pageNo){
        $scope.loader.loading2 = true;
        $scope.currentPage = pageNo;
        reportesFactory.query({bDate:$scope.search.bDate, eDate: $scope.search.eDate, id:$scope.search.id, page: $scope.currentPage})
            .$promise.then(
            function success(response){
                $scope.results = response;

                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;

                $scope.showTable =true;
                $scope.loader.loading2 = false;

            },
            function error(response){
                consolo.log(response.error)
            }
        );

    }

};

module.exports = function(app){
    app.controller('reporteGralPorUsuarios', function($scope, $filter, $http, ngToast, estadosService, reportesFactory){
        return reportes($scope, $filter, $http, ngToast, estadosService, reportesFactory);
    });
};