module.exports = function(app){
    require('./clientesEditController')(app);
    require('./clientesCreateController')(app);
    require('./clientesController')(app);
};