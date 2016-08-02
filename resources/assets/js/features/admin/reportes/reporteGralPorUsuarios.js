var reportes = function($scope, $filter, $http, $routeParams, $location, ngToast, estadosService){

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
        console.log($select.selected);
        $scope.search.id = $select.selected.id;
    };


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

    $scope.clear = function()
    {
        $scope.date1 = new Date(year, month, 1);
        $scope.date2 = new Date();
        $scope.bDate = $filter('date')($scope.date1, "yyyy-MM-dd");
        $scope.eDate = $filter('date')($scope.date2, "yyyy-MM-dd");
        $scope.search = {};
        $scope.showTable = false;
        $scope.users.selected = undefined;
    };

    $scope.sendData = function()
    {
        $scope.loader.loading2 = true;
        $scope.search.bDate = $scope.bDate;
        $scope.search.eDate = $scope.eDate;

        $http.post('api/admin/reportes-general-por-usuario', $scope.search).then(
            function success(res){
                console.log(res);
                $scope.results = res.data;
                $scope.showTable =true;
                $scope.loader.loading2 = false

            },
            function error(res){
                consolo.log(res.error)
            }
        )
    }


};

module.exports = function(app){
    app.controller('reporteGralPorUsuarios', function($scope, $filter, $http, $routeParams, $location, ngToast, estadosService){
        return reportes($scope, $filter, $http, $routeParams, $location, ngToast, estadosService);
    });
};