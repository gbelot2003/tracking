module.exports = function(app){
	require('./permisos/permisosFactory')(app);
	require('./usuarios/usuariosFactory')(app);
};