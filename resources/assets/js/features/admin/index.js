module.exports = function(app){
    require('./configuraciones')(app);
    require('./dashboard/dashController')(app);
    require('./usuarios')(app);
};