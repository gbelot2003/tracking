module.exports = function(app){
    require('./paquetesController')(app);
    require('./paquetesCreateController')(app);
    require('./senderCreateController')(app);
    require('./paquetesAgenciasController')(app);
    require('./paquetesSeccionesController')(app);
    require('./paquetesEditController')(app);
};