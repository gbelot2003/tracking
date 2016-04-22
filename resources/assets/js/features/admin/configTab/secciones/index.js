module.exports = function(app){
    require('./seccionesController')(app);
    require('./seccionesCreateController')(app);
    require('./seccionesEditController')(app);
};