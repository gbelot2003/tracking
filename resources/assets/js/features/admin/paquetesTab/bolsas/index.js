module.exports = function(app){
	require('./bolsasEditController')(app);
    require('./bolsasController')(app);
};