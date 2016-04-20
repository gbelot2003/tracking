module.exports = function(app){
	require('./usuarios/usuariosmn')(app);
	require('./configura/configuramn')(app);
};