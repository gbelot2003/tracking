module.exports = function(app){
    require('./agenciasBolsasCreateController')(app);
    require('./transitosBolsasShowController')(app);
    require('./transitosBolsasCreateController')(app);
	require('./bolsasEditController')(app);
	require('./bolsasCreateController')(app);
	require('./bolsasListadoController')(app);
    require('./bolsasController')(app);
};