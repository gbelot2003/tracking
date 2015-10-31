"use strict";
var dash = angular.module('dashApp', ['ngRoute', 'ngResource', 'ngMorph']);

dash.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
           controller: 'dashController',
           templateUrl: '/js/dash/views/index.html'
        })
        .when('/shipment/:id', {
            controller: 'ShipmentShowController',
            templateUrl: '/js/dash/views/show.html'
        })
    ;

    $locationProvider.html5Mode(false);
});

dash.factory('shipments', function($resource){
    return $resource('/api/shipments/:id', { id:'@id'}, {
        'update': {method: 'PUT'}
    });
});


dash.controller('ShipmentShowController', function($scope, shipments, $location, $routeParams){
    $scope.shipment = shipments.get({id: $routeParams.id });
});


dash.controller('dashController', function($scope, $location, $http, $filter){
    $scope.dates = new Date();

    $scope.fields = ['No. Guía', 'Origen', 'Destino', 'Fecha Creación' , 'Ultima Modificación', 'Estado'];

    $scope.sort = function(field){
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'code';

    $scope.sort.order = false;

    $scope.show = function(id){
        $location.url('/shipment/' + id);
    };

    $scope.searchByDate = function (dates){
        var tdate = dates;
        var item = $filter('date')(tdate, "yyyy-MM-dd");
        $http.get("api/consultas/shipment-by-date/" + item).success(function(data){
            $scope.shipments = data;

        });
    };
});