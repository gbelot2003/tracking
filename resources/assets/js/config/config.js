var config = function($routeProvider, $locationProvider){

    $routeProvider
        .when('/', {
            controller: 'indexController',
            template: require('raw!../features/index/index.html')
        })
        .when('/login', {
            controller: 'loginController',
            template: require('raw!../features/login/login.html')
        })
        .when('/dashboard', {
            controller: 'dashController',
            template: require('raw!../features/admin/dashboard/dashboard.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner']);
                }
            }
        })
        .when('/usuarios', {
            controller: 'usuariosController',
            template: require('raw!../features/admin/usuarios/usuarios/usuarios.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/permisos', {
            controller: 'permisosController',
            template: require('raw!../features/admin/usuarios/permisos/permisos.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio',]);
                }
            }
        })
        .when('/establecimientos', {
            controller: 'agenciasController',
            template: require('raw!../features/admin/configuraciones/agencias/agencias.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/clientes', {
            controller: 'clientesController',
            template: require('raw!../features/admin/configuraciones/clientes/clientes.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/secciones', {
            controller: 'seccionesController',
            template: require('raw!../features/admin/configuraciones/secciones/secciones.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .otherwise({
            redirectTo:'/'
        });

     $locationProvider.html5Mode(false);
};

module.exports = function(app){
    app.config(function($routeProvider, $locationProvider){
        return config($routeProvider, $locationProvider);
    });
};
