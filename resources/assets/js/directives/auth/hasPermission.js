module.exports = function(app){
  app.directive('hasPermission', function(){
    return {
        restrict: 'A',
        link: function(scope, elements, attrs){
            var setPerms  = scope.$eval(attrs.hasPermission);
            var permission = localStorage.getItem('rol');
            scope.showEl = _.contains(setPerms, permission);
        }
    }
  });
};