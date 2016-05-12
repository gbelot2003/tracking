var transitos = function($scope, $uibModalInstance, id, codeId, transitosBolsasFactory, Upload, $timeout, ngToast, $http, estadosService){

    $scope.loader = {
        loading: false,
        loading2: false
    };


    $scope.showFoto = false;

    $scope.untilUpload = true;

    $scope.isEdit = false;

    $scope.loader.loading = true;

    $scope.etransitos = estadosService.estado_paquetes;

    $scope.title = "Edición de Trancitos";

    $scope.init = function(){
        transitosBolsasFactory.get({id: id}).$promise.then(
            function success(request){
                $scope.transitos = request;

                if($scope.transitos.foto){
                    $scope.transitos.fotoPath = '/images/transitos/fotos/' + $scope.transitos.foto;
                    $scope.showFoto = true;
                    console.log(request)
                }

                $scope.loader.loading = false;
            }, function error(request){
                console.log(request);
            }
        );
    };
    $scope.uploadPic = function(file) {

        if(file != null){

            file.upload = Upload.upload({
                url: '/api/admin/transitos/image-post/' +  id,
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

        $http.get('api/admin/bolsas-transitos/delete-image/' + name).then(
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

    $scope.ok = function(){
        transitosBolsasFactory.update($scope.transitos).$promise.then(
            function success(response){
                $scope.message = true;
                console.log(response);
                $uibModalInstance.close($scope.message);
            },
            function error(response){
                ngToast.warning('A ocurrido un error ' + response);
            }
        );
    };

    $scope.changeUpState = function(){
        $scope.untilUpload = false;
    };

    $scope.unEdit = function (){
        $scope.isEdit = false;
    };

    $scope.edit = function (){
        $scope.isEdit = true;
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.init();

};

module.exports = function(app){
    app.controller('transitosBolsasShowController', function($scope, $uibModalInstance, id, codeId, transitosBolsasFactory, Upload, $timeout, ngToast, $http, estadosService){
        transitos($scope, $uibModalInstance, id, codeId, transitosBolsasFactory, Upload, $timeout, ngToast, $http, estadosService);
    });
};