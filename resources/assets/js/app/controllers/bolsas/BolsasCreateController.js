dash.controller('BolsasCreateController', function($scope, $http, $location, ModalService, ngToast){
    $scope.bolsa = {};
    //establecimiento_envio_id, establecimiento_reciber_id, estado_id, user_id, firma, details

    $scope.bolsa.estado_id = 1;

    $scope.generateCode = function(){
        $scope.bolsa.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };

    $scope.SelectEstablecimientoSender = {
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/establecimiento',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.selectEstablecimientoReciber ={
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/establecimiento',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.validacion = function(){
        if(!$scope.bolsa.code || !$scope.bolsa.establecimiento_envio_id || !$scope.bolsa.establecimiento_recive_id){
            return true;
        }
        return false;
    };

    $scope.createBag = function(){
        $http.post('api/bolsas', $scope.bolsa).then(function successCallback(response){
            var bolsa = response.data;
            $location.url('/bolsas/' + bolsa.id);
            ngToast.success({
                content: "se a creado exitosamente la bolsa, proceda a actualizar contenido"
            })
        }, function errorCallback(){
            ngToast.warning({
                content: 'Se a producido un error en la introducción de esta información'
            });
        });
    };



    $scope.bagCancel = function(){
        $location.url('/bolsas');
    };

});