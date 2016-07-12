var reportes = function($scope){
    $scope.loader = {
        loading: false,
        loading2: false
    };

    $scope.title = "Reportes";

};

module.exports = function(app){
  app.controller('reportesController', function($scope){
      return reportes($scope);
  });
};