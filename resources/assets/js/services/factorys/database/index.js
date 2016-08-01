module.exports = function(app){
	require('./permisos/permisosFactory')(app);
	require('./usuarios/usuariosFactory')(app);
	require('./agencias/agenciasFactory')(app);
	require('./secciones/seccionesFactory')(app);
	require('./clientes/clientesFactory')(app);
	require('./shipments/shipmentFactory')(app);
	require('./shipments/transitosFactory')(app);
	require('./bolsas/bolsasFactory')(app);
	require('./bolsas/transitosBolsasFactory')(app);
    require('./reportes/reportesFactory')(app);
};