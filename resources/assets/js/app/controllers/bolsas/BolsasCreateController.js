dash.controller('BolsasCreateController', function($scope, $http, $location, ModalService, ngToast){
    $scope.bolsa = {};
    $scope.generateCode = function(){
        $scope.bolsa.code =  Math.floor(Math.random() * 900000000) + 100000000;
    };


});