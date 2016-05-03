module.exports = function(app){
    require('./transitosCreateController')(app);
    require('./transitosEditController')(app);
    require('./senderCreateController')(app);
    require('./paquetesController')(app);
    require('./paquetesCreateController')(app);
    require('./paquetesEditController')(app);
    require('./paquetesSeccionesController')(app);
    require('./paquetesAgenciasController')(app);
};