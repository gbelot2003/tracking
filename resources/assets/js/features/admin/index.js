module.exports = function(app){
    require('./configTab')(app);
    require('./paquetesTab')(app);
    require('./dashboard/dashController')(app);
    require('./usuariosTab')(app);
};