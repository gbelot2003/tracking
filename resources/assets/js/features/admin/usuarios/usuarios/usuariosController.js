var user = function($scope, $http){
    $scope.title = "Usuarios";

    $http.get('/api/admin/users').then(function success(response){
        $scope.users = response.data.data;
        $scope.totalItems = response.data.total;
        $scope.currentPage = response.data.current_page;
        $scope.maxSize = response.data.per_page;
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
    app.controller('usuariosController', function($scope, $http){
        return user($scope, $http);
    });
}