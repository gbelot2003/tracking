var index = function($scope){
  $scope.message = "index page";
}
module.exports = function(app){
    app.controller('indexController',function($scope){
      return index($scope);
    })
}
