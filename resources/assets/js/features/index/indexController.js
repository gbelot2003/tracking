var index = function($scope){
  //$scope.message = "index page";
  $scope.message = localStorage.getItem('rol')
}
module.exports = function(app){
    app.controller('indexController',function($scope){
      return index($scope);
    })
}
