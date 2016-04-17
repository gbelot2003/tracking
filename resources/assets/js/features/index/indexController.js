var index = function($scope, permService){
    $scope.message = permService.permissionModel.permission;
};
module.exports = function(app){
    app.controller('indexController',function($scope, permService){
      return index($scope, permService);
    })
}
