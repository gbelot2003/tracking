var transito = function($scope, $uibModalInstance, id, codeId, transitosBolsasFactory, Upload, $timeout, ngToast, $http, estadosService){

    $scope.etransitos = estadosService.estado_paquetes;

    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.transitos = {};

    $scope.transitos.bolsa_id = id;

    $scope.showFoto = false;

    $scope.untilUpload = true;

    $scope.agencia = {};

    $scope.title = "Edición de Trancitos";

    $scope.isEdit = false;

    $scope.loader.loading = false;

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.changeUpState = function(){
        $scope.untilUpload = false;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };

    $scope.uploadPic = function(file) {

        if(file != null){

            file.upload = Upload.upload({
                url: '/api/admin/transitos/image-post/' +  codeId,
                data: {
                    foto: file
                }
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    $scope.untilUpload = true;
                    $scope.transitos.foto = response.data;

                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;

            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };

    $scope.deleteFoto = function(name){
        $scope.loader.loading2 = true;

        $http.get('api/admin/transitos/delete-image/' + name).then(
            function success(response){
                ngToast.success('Imagen Eliminada');
                $scope.showFoto = false;
                $scope.transitos.foto = '';
                $scope.loader.loading2 = false;

            },
            function error(response){
                ngToast.warning('Ha ocurrido un error');
            }
        );
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function(){
        transitosBolsasFactory.save($scope.transitos).$promise.then(
            function success(response){
                $scope.message = true;
                $uibModalInstance.close($scope.message);
                console.log(response);
            },
            function error(response){
                ngToast.warning('A ocurrido un error ' + response);
            }
        );
    }


};

module.exports = function(app){
    app.controller('transitosBolsasCreateController', function($scope, $uibModalInstance, id, codeId, transitosBolsasFactory, Upload, $timeout, ngToast, $http, estadosService){
        return transito($scope, $uibModalInstance, id, codeId, transitosBolsasFactory, Upload, $timeout, ngToast, $http, estadosService);
    });
};