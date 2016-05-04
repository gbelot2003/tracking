var transitos = function($scope, $uibModalInstance, shipId, transitosFactory,  Upload, $timeout, ngToast, $http){
	$scope.etransitos = [
        {id: 2, name:'Transito, regular', description: 'La encomienda a ingresado a la linea de entragas y esta en manos de la empresa de mensajeria.'},
        {id: 3, name:'Transito, Centro de acopio', description: 'La encomienda a ingresado a el centro de acopio descrito.'},
        {id: 4, name:'Transito, en bolsa de transporte', description: 'El paquete a ingresado a una bolsa para su traslado a destinos posteriores o su entrega.'},
        {id: 5, name:'Transito, presenta daños ligeros', description: 'La encomienda presenta algun tipo de daños.'}
    ];

    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.showFoto = false;

    $scope.untilUpload = true;

    $scope.agencia = {};

    $scope.title = "Edición de Trancitos";

    $scope.isEdit = false;

    $scope.loader.loading = false;

    $scope.uploadPic = function(file) {

        if(file != null){

            file.upload = Upload.upload({
                url: '/api/admin/transitos/image-post/' +  shipId,
                data: {
                    foto: file
                }
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    $scope.untilUpload = true;
                    $scope.transitos.foto = response.data;; 
                    
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
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };


};


module.exports = function(app){
    app.controller('transitosCreateController', function($scope, $uibModalInstance,  shipId, transitosFactory,  Upload, $timeout, ngToast, $http){
        return transitos($scope, $uibModalInstance, shipId, transitosFactory,  Upload, $timeout, ngToast, $http);
    })
};
