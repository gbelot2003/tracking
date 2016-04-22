var dash = function($scope, seccionesFactory, ngToast,  $uibModal){

    $scope.loader = {
        loading: false,
        loading2:false
    };
    $scope.searcher = false;
    $scope.newVal = '';
    $scope.title = "Secciones Administrativas";

    $scope.init = function(){
        seccionesFactory.get(function(response){
            $scope.seccion = response.data;
            $scope.totalItems = response.total;
            $scope.currentPage = response.current_page;
            $scope.maxSize = response.per_page;

            $scope.loader.loading = false;
            $scope.loader.loading2 = false;

        }, function error(response){
            ngToast.danger('A habido algun error, el servidor responde ' + response.sendText);
            $scope.loader.loading = false;
        });
    };

    $scope.$watch('searchable', function(newVal, oldVal){

        if(oldVal === newVal) return;
        if(newVal === ""){
            $scope.init();
            $scope.searcher = false;
        } else {
            $scope.newVal = newVal;
            $scope.search(newVal);
        }

    });

    $scope.search = function(val){
        $scope.searcher = true;
        $scope.loader.loading2 = true;

        seccionesFactory.query({query:val}, function(response){
            $scope.seccion = response.data;
            $scope.totalItems = response.total;
            $scope.currentPage = response.current_page;
            $scope.maxSize = response.per_page;
            $scope.loader.loading2 = false;
        }, function error(response){
            ngToast.danger('A habido algun error, el servidor responde ' + response.sendText);
            $scope.loader.loading = false;
            $scope.loader.loading2 = false;

        });
    };

    $scope.nextPage = function(pageNo){

        $scope.loader.loading2 = true;
        $scope.currentPage = pageNo;


        if($scope.searcher === true){
            var query = seccionesFactory.query({query:$scope.newVal, page:$scope.currentPage});

        }else {
            var query = seccionesFactory.get({page:$scope.currentPage});
            query.$promise.then(function success(response){
                $scope.seccion = response.data;
                $scope.totalItems = response.total;
                $scope.currentPage = response.current_page;
                $scope.maxSize = response.per_page;
                $scope.loader.loading2 = false;
            });
        };

        query.$promise.then(function success(response){
            $scope.seccion = response.data;
            $scope.totalItems = response.total;
            $scope.currentPage = response.current_page;
            $scope.maxSize = response.per_page;
            $scope.loader.loading2 = false;
        }, function error(response){
            ngToast.danger('A habido algun error, el servidor responde ' + response.sendText);
            $scope.loader.loading = false;
        });
    };

    $scope.editModal = function(id){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./seccion-edit.html'),
            controller: 'seccionesEditController',
            backdrop: 'static',
            resolve: {
                id: id
            }
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a actualizado correctamente el rol');
                $scope.loader.loading2 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos de la actualización.');
                $scope.loader.loading2 = false;
            }
        });
    };

    $scope.createModal = function(){

        var modalInstance = $uibModal.open({
            animation: true,
            template: require('raw!./seccion-create.html'),
            controller: 'seccionesCreateController',
            backdrop: 'static'
        });

        modalInstance.result.then(function(message){
            $scope.message = message;
            if($scope.message == true){
                ngToast.success('Se a creado correctamente el rol.');
                $scope.loader.loading2 = true;
                $scope.init();
            } else {
                ngToast.danger('A ocurrido un error en el envío, revise los datos.');
            }
        });
    };

    $scope.loader.loading = true;
    $scope.init();

};

module.exports = function(app){
    app.controller('seccionesController', function($scope, seccionesFactory,  ngToast,  $uibModal){
        return dash($scope, seccionesFactory,  ngToast,  $uibModal);
    });
}