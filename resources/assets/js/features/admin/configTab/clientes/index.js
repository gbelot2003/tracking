module.exports = function(app){
    require('./clientesEditController')(app);
    require('./clientesController')(app);
};