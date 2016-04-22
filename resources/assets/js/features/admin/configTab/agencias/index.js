module.exports = function(app){
    require('./agenciasController')(app);
    require('./agenciasEditController')(app);
};