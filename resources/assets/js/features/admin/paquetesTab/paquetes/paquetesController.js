var paquetes = function($scope){
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.loader.loading = false;
    
    $scope.title = "Paquetes";
};

module.exports = function(app){
    app.controller('paquetesController', function($scope){
        return paquetes($scope);
    });
};