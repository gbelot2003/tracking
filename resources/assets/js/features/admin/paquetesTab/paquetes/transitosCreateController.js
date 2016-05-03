var transitos = function($scope, $http, ngToast,  $uibModalInstance, shipmentFactory, $location, $routeParams){

};


module.exports = function(app){
    app.controller('transitosEditController', function($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams){
        return transitos($scope, $http, ngToast,  $uibModal, shipmentFactory, $location, $routeParams);
    })
};
