module.exports = function(app){
    require('./dashboard/dashController.js')(app);
    require('./usuarios/permisos/permisosController.js')(app);
    require('./usuarios/usuarios/usuariosController.js')(app);
    require('./configuraciones/agencias/agenciasController.js')(app);
    require('./configuraciones/clientes/clientesController.js')(app);
    require('./configuraciones/secciones/seccionesController.js')(app);
};