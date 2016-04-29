module.exports = function(app){
	require('./permisos/permisosFactory')(app);
	require('./usuarios/usuariosFactory')(app);
	require('./agencias/agenciasFactory')(app);
	require('./secciones/seccionesFactory')(app);
	require('./clientes/clientesFactory')(app);
	require('./shipments/shipmentFactory')(app);
};