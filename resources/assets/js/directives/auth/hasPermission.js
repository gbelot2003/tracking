module.exports = function(app){
  app.directive('hasPermission', function(permService, authentication){
    return {
        restrict: 'AE',
        link: function(scope, elements, attrs){
          var setPerms  = scope.$eval(attrs.hasPermission);
          scope.isShowing = authentication.hasPerms(setPerms);
          if(!scope.isShowing){
            elements.css('display', 'none');
          } else {
             elements.css('display', 'inherence');
          }  
        },
    }
  });
};