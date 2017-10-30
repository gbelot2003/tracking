var config = function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'indexController',
            template: require('raw!../features/index/index.html'),
            resolve: {
                permission: function (permService) {
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
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner']);
                }
            }
        })
        .when('/permisos', {
            controller: 'permisosController',
            template: require('raw!../features/admin/usuariosTab/permisos/permisos.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/usuarios', {
            controller: 'usuariosController',
            template: require('raw!../features/admin/usuariosTab/usuarios/usuarios.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/usuarios/create', {
            controller: 'usuariosCreateController',
            template: require('raw!../features/admin/usuariosTab/usuarios/usuarios-create.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/usuarios/:id', {
            controller: 'usuariosEditController',
            template: require('raw!../features/admin/usuariosTab/usuarios/usuarios-edit.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })
        .when('/agencias', {
            controller: 'agenciasController',
            template: require('raw!../features/admin/configTab/agencias/agencias.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/clientes', {
            controller: 'clientesController',
            template: require('raw!../features/admin/configTab/clientes/clientes.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/clientes/create', {
            controller: 'clientesCreateController',
            template: require('raw!../features/admin/configTab/clientes/clientes-create.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/clientes/:id', {
            controller: 'clientesEditController',
            template: require('raw!../features/admin/configTab/clientes/clientes-edit.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/secciones', {
            controller: 'seccionesController',
            template: require('raw!../features/admin/configTab/secciones/secciones.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/paquetes', {
            controller: 'paquetesController',
            template: require('raw!../features/admin/paquetesTab/paquetes/paquetes.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/paquetes/create', {
            controller: 'paquetesCreateController',
            template: require('raw!../features/admin/paquetesTab/paquetes/paquetes-create.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/paquetes/:id', {
            controller: 'paquetesEditController',
            template: require('raw!../features/admin/paquetesTab/paquetes/paquetes-edit.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/paquetes-multiple', {
            controller: 'paquetesMultipleController',
            template: require('raw!../features/admin/paquetesTab/paquetes/paquetes-multiple.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/bolsas', {
            controller: 'bolsasController',
            template: require('raw!../features/admin/paquetesTab/bolsas/bolsas.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/bolsas/create', {
            controller: 'bolsasCreateController',
            template: require('raw!../features/admin/paquetesTab/bolsas/bolsas-create.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/bolsas/:id', {
            controller: 'bolsasEditController',
            template: require('raw!../features/admin/paquetesTab/bolsas/bolsas-edit.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/bolsas-listado/:id', {
            controller: 'bolsasListadoController',
            template: require('raw!../features/admin/paquetesTab/bolsas/bolsas-list.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })
        .when('/cargamentos', {
            controller: 'cargamentosController',
            template: require('raw!../features/admin/paquetesTab/cargamentos/cargamentos.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin', 'centro-acopio', 'currier']);
                }
            }
        })

        .when('/reportes/general-por-estados', {
            controller: 'reportesGralEstadoController',
            template: require('raw!../features/admin/reportes/reportes-gral-por-estado.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })

        .when('/reportes/reporte-general-por-establecimientos', {
            controller: 'reporteGralPorEstablecimientos',
            template: require('raw!../features/admin/reportes/reporte-gral-por-establecimiento.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })

        .when('/reportes/reporte-general-por-empresa', {
            controller: 'reportesGralPorEmpresas',
            template: require('raw!../features/admin/reportes/reporte-gral-por-empresas.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })

        .when('/reportes/reporte-general-por-usuarios', {
            controller: 'reporteGralPorUsuarios',
            template: require('raw!../features/admin/reportes/reportes-gral-por-usuarios.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })

        .when('/reportes/listado-por-estados', {
            controller: 'listadoPorEstados',
            template: require('raw!../features/admin/reportes/listado-por-estados.html'),
            resolve: {
                permission: function (permService) {
                    return permService.permissionCheck(['owner', 'admin']);
                }
            }
        })

        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
};

module.exports = function (app) {
    app.config(function ($routeProvider, $locationProvider) {
        return config($routeProvider, $locationProvider);
    });
};
