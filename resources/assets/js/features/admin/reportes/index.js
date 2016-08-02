module.exports = function(app){
    require('./reportesGralEstadoController.js')(app);
    require('./reporteGralPorEstablecimientos.js')(app);
    require('./reportesGralPorEmpresas.js')(app);
    require('./reporteGralPorUsuarios.js')(app);
};