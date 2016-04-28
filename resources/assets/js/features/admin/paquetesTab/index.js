module.exports = function(app){
    require('./paquetes')(app);
    require('./bolsas')(app);
    require('./cargamentos')(app);
};