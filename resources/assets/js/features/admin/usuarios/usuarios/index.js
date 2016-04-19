module.exports = function(app){
	require('./usuariosController')(app);
    require('./usuariosEditController')(app);
    require('./usuariosCreateController')(app);
};