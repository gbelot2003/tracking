module.exports = function(app){
    require('./secciones/')(app);
    require('./clientes/')(app);
    require('./agencias/')(app);
};