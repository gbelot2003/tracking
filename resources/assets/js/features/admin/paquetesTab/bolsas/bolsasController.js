var bolsas = function($scope){
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.loader.loading = false;

    $scope.title = "Bolsas";
};

module.exports = function(app){
    app.controller('bolsasController', function($scope){
        return bolsas($scope);
    });
};