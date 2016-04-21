module.exports = function(app){
	require('./permisosController')(app);
	require('./editPermisosController')(app);
};