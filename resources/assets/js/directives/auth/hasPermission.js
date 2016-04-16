module.exports = function(app){
  app.directive('hasPermission', function(permService){
    return {
        restrict: 'A',
        link: function (scope, element, attr){
            var setPerms  = scope.$eval(attr.hasPermission);
            var getPerms = permService.permissionModel.permission;
            scope.show = false;
            angular.forEach(setPerms, function(e){
                console.log(e);
                if(e === getPerms){
                    scope.show = true;
                }
            });
            console.log(scope.show);
        }
    }
  });
};