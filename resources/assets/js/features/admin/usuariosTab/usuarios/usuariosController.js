var user = function($scope, $http, ngToast, usuariosFactory){
    
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.loader.loading = true;
    $scope.title = "Usuarios";
    $scope.searcher = false;
    $scope.newVal = '';

    $scope.init = function(){

        $scope.searcher = false;
        usuariosFactory.get(function(response){
            $scope.users = response.data;
            $scope.totalItems = response.total;
            $scope.currentPage = response.current_page;
            $scope.maxSize = response.per_page;
            $scope.loader.loading = false;
        }, function error(response){
                ngToast.danger('A habido algun error, el servidor responde ' + response.sendText);
                $scope.loader.loading = false;
         });  
    };

    $scope.search = function(val){
            $scope.searcher = true;
            $scope.loader.loading2 = true;

            usuariosFactory.query({query:val}, function(response){
                $scope.users = response.data;
                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;
                $scope.loader.loading2 = false;
            }, function error(response){
                ngToast.danger('A habido algun error, el servidor responde ' + response.sendText);
                $scope.loader.loading = false;
            });
        
    };

    $scope.init();

    $scope.$watch('searchable', function(newVal, oldVal){

        if(oldVal === newVal) return;
        if(newVal == ""){
            $scope.init();
            $scope.search = false;

        }    
        $scope.newVal = newVal;
        $scope.search(newVal);
        
    });

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    
    $scope.nextPage = function(pageNo){

        $scope.loader.loading2 = true;
        $scope.currentPage = pageNo;

        var query = usuariosFactory.get({page:$scope.currentPage});

        if($scope.searcher == true){
            var query = usuariosFactory.query({query:$scope.newVal, page:$scope.currentPage});
        } 
         
        query.$promise.then(function success(response){
            $scope.users = response.data;
            $scope.totalItems = response.total;
            $scope.currentPage = response.current_page;
            $scope.maxSize = response.per_page;
            $scope.loader.loading2 = false;
        }, function error(response){
            ngToast.danger('A habido algun error, el servidor responde ' + response.sendText);
            $scope.loader.loading = false;
        });       
    }
};

module.exports = function(app){
    app.controller('usuariosController', function($scope, $http, ngToast, usuariosFactory){
        return user($scope, $http, ngToast, usuariosFactory);
    });
}