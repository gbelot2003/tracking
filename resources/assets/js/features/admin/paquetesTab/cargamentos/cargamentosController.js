var cargamentos = function($scope){
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.loader.loading = false;

    $scope.title = "Cargamentos";
};

module.exports = function(app){
    app.controller('cargamentosController', function($scope){
        return cargamentos($scope);
    });
};