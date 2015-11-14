"use strict";
var dash = angular.module('dashApp', [
    'ngSanitize',
    'ngRoute',
    'angularModalService',
    'ngResource',
    'ngMorph',
    'ui.select2',
    'ngToast'
]);

dash.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            controller: 'dashController',
            templateUrl: '/js/dash/views/index.html',
            activeTab: 'dashboard'
        })
        .when('/shipment/:id', {
            controller: 'ShipmentShowController',
            templateUrl: '/js/dash/views/shipments/show.html'
        })
        .when('/newShipment', {
            controller: 'newShipmentController',
            templateUrl: '/js/dash/views/shipments/newShipment.html'
        })
        .when('/bolsas',{
            controller: 'bolsasController',
            templateUrl: '/js/dash/views/bolsas/bolsas.html',
            activeTab: 'bolsas'
        })
        .when('/bolsas/create', {
            controller: 'BolsasCreateController',
            templateUrl: '/js/dash/views/bolsas/create.html'
        })
        .when('/bolsas/:id', {
            controller: 'BolsasShowController',
            templateUrl: '/js/dash/views/bolsas/edit.html'
        })
    ;

    $locationProvider.html5Mode(false);
});

dash.factory('shipments', function($resource){
    return $resource('/api/shipments/:id', { id:'@id'}, {
        'update': {method: 'PUT'}
    });
});

dash.factory('bolsas', function($resource){
   return $resource('api/bolsa/:id', {id:'@id'}, {
       'update': {method: 'PUT'}
   });
});
