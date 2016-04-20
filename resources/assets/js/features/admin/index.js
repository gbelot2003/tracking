module.exports = function(app){
    require('./configTab')(app);
    require('./dashboard/dashController')(app);
    require('./usuariosTab')(app);
};