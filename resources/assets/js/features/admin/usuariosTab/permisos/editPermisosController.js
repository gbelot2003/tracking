var edit = function($scope, $uibModalInstance, id, permisosFactory, ngToast, $timeout){
    
    $scope.loader = {
        loading: false
    };

    $scope.title = "Edición de Permisos";

    $scope.isEdit = false;

    $scope.loader.loading = true;
    $scope.permiso = permisosFactory.get({id:id}, function(){
        $scope.loader.loading = false;
    });

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };

    $scope.ok = function () {
        permisosFactory.update({ id: id }, $scope.permiso).$promise
            .then(function success(response){
            $scope.message = true;
            $uibModalInstance.close($scope.message);    
        }, function(error){
            $scope.message = false;
            $uibModalInstance.close($scope.message);
        });
        
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};

module.exports = function(app){
    app.controller('editPermisosController', function($scope, $uibModalInstance, id, permisosFactory, ngToast, $timeout){
        return edit($scope, $uibModalInstance, id, permisosFactory, ngToast, $timeout);
    });
};