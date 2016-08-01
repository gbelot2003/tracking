var reportes = function($scope, $filter, $timeout, $http){

    $scope.loader = {
        loading: false,
        loading2: false
    };

    var datef = new Date();
    var month = datef.getMonth();
    var year = datef.getFullYear();

    $scope.title = "Reportes General por Estados";
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
            //$scope.search(item, $scope.searchable, $scope.searchType);
        }
    });

    // watcher de fechas
    $scope.$watch('date2', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $scope.mSearch = true;
            $scope.eDate = $filter('date')($scope.date2, "yyyy-MM-dd");
            //$scope.search(item, $scope.searchable, $scope.searchType);
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


    $scope.sendData = function(){
        $scope.rec.bDate = $scope.bDate;
        $scope.rec.eDate = $scope.eDate;
        $http.post('api/admin/reportes-general-por-estados', $scope.rec).then(
            function success(res){
                console.log(res.data);
                $scope.results = res.data;
            },
            function errorCallback(res){
                console.log("error" + res);
            }
        );

    }

};

module.exports = function(app){
  app.controller('reportesController', function($scope, $filter, $timeout, $http){
      return reportes($scope, $filter, $timeout, $http);
  });
};