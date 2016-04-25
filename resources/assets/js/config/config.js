var config = function($routeProvider, $locationProvider){

    $routeProvider
        .when('/', {
            controller: 'indexController',
            template: require('raw!../features/index/index.html'),
             resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
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
        .when('/permisos', {
            controller: 'permisosController',
            template: require('raw!../features/admin/usuariosTab/permisos/permisos.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/usuarios', {
            controller: 'usuariosController',
            template: require('raw!../features/admin/usuariosTab/usuarios/usuarios.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/usuarios/create', {
            controller: 'usuariosCreateController',
            template: require('raw!../features/admin/usuariosTab/usuarios/usuarios-create.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/usuarios/:id', {
            controller: 'usuariosEditController',
            template: require('raw!../features/admin/usuariosTab/usuarios/usuarios-edit.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/agencias', {
            controller: 'agenciasController',
            template: require('raw!../features/admin/configTab/agencias/agencias.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/clientes', {
            controller: 'clientesController',
            template: require('raw!../features/admin/configTab/clientes/clientes.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/clientes/:id', {
            controller: 'clientesEditController',
            template: require('raw!../features/admin/configTab/clientes/clientes-edit.html'),
            resolve:{
                permission: function(permService){
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/secciones', {
            controller: 'seccionesController',
            template: require('raw!../features/admin/configTab/secciones/secciones.html'),
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
