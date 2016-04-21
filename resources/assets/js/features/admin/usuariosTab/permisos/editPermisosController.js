var edit = function($scope, $uibModalInstance, id, permisosFactory, ngToast){

    $scope.title = "Edición de Permisos";

    $scope.isEdit = false;

    $scope.permiso = permisosFactory.get({id:id})

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };

    $scope.ok = function () {
        permisosFactory.update({ id: id }, $scope.permiso).$promise
            .then(function success(response){
            $scope.message = true
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
    app.controller('editPermisosController', function($scope, $uibModalInstance, id, permisosFactory, ngToast){
        return edit($scope, $uibModalInstance, id, permisosFactory, ngToast);
    });
};