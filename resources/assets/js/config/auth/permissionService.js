module.exports = function(app){
  app.factory('permService', function($resource, $q, $rootScope, $location){
     return{

         permissionModel:{
             permission:{},
             isPermissionLoaded: false
         },

         permissionCheck: function (roleCollection) {
             var deferred = $q.defer();
             var parentPointer = this;

             if (this.permissionModel.isPermissionLoaded) {
                 this.getPermission(this.permissionModel, roleCollection, deferred);
             } else {

                 $resource('api/authenticate/rol').get().$promise.then(function (response){
                     parentPointer.permissionModel.permission = response.roles;
                     parentPointer.permissionModel.isPermissionLoaded = true;
                     parentPointer.getPermission(parentPointer.permissionModel, roleCollection, deferred);
                 });
             }
             return deferred.promise;
         },

         getPermission: function (permissionModel, roleCollection, deferred) {
             var ifPermissionPassed = false;
             angular.forEach(roleCollection, function (role) {
                 switch (role) {
                     case 'owner':
                         if (permissionModel.permission === 'owner') {
                             ifPermissionPassed = true;
                         }
                         break;

                     case 'admin':
                         if (permissionModel.permission === 'admin') {
                             ifPermissionPassed = true;
                         }
                         break;

                     case 'centro-acopio':
                         if (permissionModel.permission === 'centro-acopio') {
                             ifPermissionPassed = true;
                         }
                         break;
                     case 'currier':
                         if (permissionModel.permission === 'currier') {
                             ifPermissionPassed = true;
                         }
                         break;
                     case 'cliente':
                         if (permissionModel.permission === 'cliente') {
                             ifPermissionPassed = true;
                         }
                         break;
                     default:
                         ifPermissionPassed = false;
                 }
             });

             if (!ifPermissionPassed) {
                 $location.path('/');
                 $rootScope.$on('$locationChangeSuccess', function (next, current) {
                     deferred.resolve();
                 });
             } else {
                 deferred.resolve();
             }

         },

         testPermissision: function(permissionModel, roleCollectuib){
             angular.forEach(roleCollection, function (role) {
                 switch (role) {
                     case 'owner':
                         if (permissionModel.permission === 'owner') {
                             ifPermissionPassed = true;
                         }
                         break;

                     case 'admin':
                         if (permissionModel.permission === 'admin') {
                             ifPermissionPassed = true;
                         }
                         break;

                     case 'user':
                         if (permissionModel.permission === 'user') {
                             ifPermissionPassed = true;
                         }
                         break;
                     default:
                         ifPermissionPassed = false;
                 }
             });
         }
     }
  });
};