module.exports = function(app){
  app.directive('pwCheck', [function(){
      return {
          require: 'ngModel',
          link: function(scope, elem, attrs, controller){
              var firstPassword = '#' + attrs.pwCheck;
              elem.add(firstPassword).on('keyup', function(){
                  scope.$apply(function(){
                      var v = elem.val()===$(firstPassword).val();
                      controller.$setValidity('pwmatch', v);
                  });
              });
          }
      }
  }]);
};