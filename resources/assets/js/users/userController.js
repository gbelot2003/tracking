var userController = function(app){
  app.controller('UserController', function($http, $auth, $rootScope, $state){
      var vm = this;

      vm.users;
      vm.error;

      vm.getUsers = function() {

          //Grab the list of users from the API
          $http.get('api/authenticate').success(function(users) {
              vm.users = users;
          }).error(function(error) {
              vm.error = error;
          });
      };
      vm.logout = function() {

          $auth.logout().then(function() {

              // Remove the authenticated user from local storage
              localStorage.removeItem('user');

              // Flip authenticated to false so that we no longer
              // show UI elements dependant on the user being logged in
              $rootScope.authenticated = false;

              // Remove the current user info from rootscope
              $rootScope.currentUser = null;

              // Redirect to auth (necessary for Satellizer 0.12.5+)
              $state.go('auth');
          });
      }
  })
};
module.exports = userController;
