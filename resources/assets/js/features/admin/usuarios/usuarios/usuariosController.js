var user = function($scope, $http, ngToast){
    $scope.title = "Usuarios";

    $http.get('/api/admin/users').then(function success(response){
        $scope.users = response.data.data;
        $scope.totalItems = response.data.total;
        $scope.currentPage = response.data.current_page;
        $scope.maxSize = response.data.per_page;
    }, function error(response){
        ngToast.danger('A habido algun error, el servidor responde ' + response.sendText)
    });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    
    $scope.nextPage = function(pageNo){
        $scope.currentPage = pageNo;
        $http.get('/api/admin/users?page=' + $scope.currentPage).then(function success(response){
            $scope.users = response.data.data;
            $scope.totalItems = response.data.total;
            $scope.currentPage = response.data.current_page;
            $scope.maxSize = response.data.per_page;
        });
    }
};

module.exports = function(app){
    app.controller('usuariosController', function($scope, $http, ngToast){
        return user($scope, $http, ngToast);
    });
}