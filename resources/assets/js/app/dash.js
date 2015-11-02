"use strict";
var dash = angular.module('dashApp', ['ngRoute', 'ngResource', 'ngMorph']);

dash.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            controller: 'dashController',
            templateUrl: '/js/dash/views/index.html',
            activeTab: 'dashboard'
        })
        .when('/shipment/:id', {
            controller: 'ShipmentShowController',
            templateUrl: '/js/dash/views/show.html'
        })
        .when('/bolsas',{
            controller: 'bolsasController',
            templateUrl: '/js/dash/views/bolsas.html',
            activeTab: 'bolsas'
        })
    ;

    $locationProvider.html5Mode(false);
});

dash.factory('shipments', function($resource){
    return $resource('/api/shipments/:id', { id:'@id'}, {
        'update': {method: 'PUT'}
    });
});