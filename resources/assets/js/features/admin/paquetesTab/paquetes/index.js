module.exports = function(app){
    require('./paquetesController')(app);
    require('./paquetesCreateController')(app);
};