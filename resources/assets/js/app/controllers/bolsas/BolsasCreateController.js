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
        if(!$scope.bolsa.code || !$scope.bolsa.establecimiento_envio_id || !$scope.bolsa.establecimiento_reciber_id){
            return true;
        }
        return false;
    };

    $scope.createBag = function(){
        //Enviamos la bolsa y esperamos la
        // respuesta del objeto que tendra
        // el id de dicha bolsa

        //Enviamos a la vista bolsas/id:
        console.log($scope.bolsa);
    };

    $scope.bagCancel = function(){
        $location.url('/bolsas');
    };

});