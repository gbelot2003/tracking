var bolsas = function($scope, bolsasFactory,  ngToast,  $uibModal, $filter,  $timeout){
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.mSearch = false;

    $scope.searchable = null;

	$scope.loader.loading = true;

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

    $scope.title = "Bolsas";

    $scope.init = function(){
    	bolsasFactory.get().$promise.then(function success(response){
    		$scope.bolsas = response.data;
    		$scope.totalItems = response.total;
            $scope.currentPage = response.current_page;
            $scope.maxSize = response.per_page;
            $scope.loader.loading = false;
            $scope.loader.loading2 = false;    
    	},
    	function error(response){
            ngToast.danger("Hay un problema de conexión con el servidor");
    	});
    };

    $scope.search = function(date, query, type, page){
        
        $scope.mSearch = true;
        
        if(query == ''){
            query = null;
            $scope.mSearch = false;
        }

        $scope.loader.loading2 = true;
        bolsasFactory.query({date: date, query: query, type: type, page: page}).$promise.then(
            function success(response){
                $scope.bolsas = response.data;
                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;
                $scope.loader.loading2 = false;
            }, function error(response){
                ngToast.danger("Hay un problema de conexión de busqueda con el servidor");
            }
        );
    };


    // watcher de fechas
    $scope.$watch('dt', function(oldD, newD){
        if(oldD == newD){
            return;
        } else {
            $scope.mSearch = true;
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
            bolsasFactory.get({page:$scope.currentPage}).$promise.then(
                function success(response){
                    $scope.shipments = response.data;
                    $scope.totalItems = response.total;
                    $scope.currentPage = response.current_page;
                    $scope.maxSize = response.per_page;
                    $scope.loader.loading = false;
                    $scope.loader.loading2 = false;
                }, function error(response){
                    ngToast.danger("Hay un problema de conexión con el servidor");
                }
            );
        }
    };

    $scope.showList = function(id){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./bolsas-modal-list.html'),
            controller: 'bolsasModalListController',
            backdrop: 'static',
            resolve: {
                id: id
            }
        });
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
    app.controller('bolsasController', function($scope, bolsasFactory,  ngToast,  $uibModal, $filter,  $timeout){
        return bolsas($scope, bolsasFactory,  ngToast,  $uibModal, $filter,  $timeout);
    });
};