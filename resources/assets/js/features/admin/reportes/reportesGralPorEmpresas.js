var reportes = function($scope){
	$scope.title = "Repostes por Empresa";
};

module.exports = function(app){
    app.controller('reportesGralPorEmpresas', function($scope){
        return reportes($scope);
    });
};