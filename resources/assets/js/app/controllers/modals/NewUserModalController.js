dash.controller('NewUserModalController', function($scope, $http, $element, profileCreater, close){

    $scope.profileCreater = profileCreater;

    $scope.profile = {
        name: '',
        establecimiento_id: '',
        seccion_id:'',
        estado_id:1
    };

    $scope.selectEstablecimientos = {
        allowClear:true,
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/establecimiento',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.selectSeccion = {
        allowClear:true,
        ajax:{
            cache:true,
            datType: 'json',
            url: '/api/consultas/seccion',
            results: function(data){
                return {results: data}
            }
        }
    };

    $scope.submitTrader = function(){
        $http.post("personas", $scope.profile).then(function successCallback(response){
            $scope.message = "El registro se a creado correctamente";
            $scope.profile = response.data;
        }, function errorCallback(response){
            $scope.message = "Error en la creacion del perfil!!";
            console.log(response.data);
        });
    };

    $scope.close = function() {
        close({
            profile: $scope.profile.id
        }, 500); // close, but give 500ms for bootstrap to animate
    };

});