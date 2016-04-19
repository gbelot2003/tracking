var user = function($scope, $http, ngToast){
    $scope.title = "Usuarios";
    $scope.searcher = false;
    $scope.newVal = '';

    $scope.init = function(){
        $scope.searcher = false;
        $http.get('/api/admin/users').then(function success(response){
        $scope.users = response.data.data;
        $scope.totalItems = response.data.total;
        $scope.currentPage = response.data.current_page;
        $scope.maxSize = response.data.per_page;
        }, function error(response){
            ngToast.danger('A habido algun error, el servidor responde ' + response.sendText)
        });
    }

    $scope.search = function(val){
            $scope.searcher = true;
            $http.get('api/admin/users/search/' + val).then(function success(response){
            $scope.users = response.data.data;
            $scope.totalItems = response.data.total;
            $scope.currentPage = response.data.current_page;
            $scope.maxSize = response.data.per_page;
        });
        
    }

    $scope.init();

    $scope.$watch('searchable', function(newVal, oldVal){

        if(oldVal === newVal) return;
        if(newVal == ""){
            $scope.init();
        }    
        $scope.newVal = newVal;
        $scope.search(newVal);
        
    });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    
    $scope.nextPage = function(pageNo){
        $scope.currentPage = pageNo;
        var user1 = '/api/admin/users?page=' + $scope.currentPage; 
        
        if($scope.searcher == true){
            user1 = '/api/admin/users/search/'+ $scope.newVal +'?page=' + $scope.currentPage;
        } 
                
        $http.get(user1).then(function success(response){
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