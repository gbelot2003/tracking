module.exports = function(app){
    require('./auth/hasPermission')(app);
    require('./nav/nav-info')(app);
    require('./forms/misc/cu-focus')(app);
};