module.exports = function(app){
    require('./agenciasBolsasCreateController')(app);
    require('./transitosBolsasShowController')(app);
    require('./transitosBolsasCreateController')(app);
    require('./transitoBolsaWarningController')(app);
    require('./bolsaPaqueteViewController')(app);
    require('./bolsasModalListController')(app);
    require('./bolsasEditController')(app);
	require('./bolsasCreateController')(app);
	require('./bolsasListadoController')(app);
    require('./bolsasController')(app);
};