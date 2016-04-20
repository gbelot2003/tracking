module.exports = function(app){
    require('./auth/hasPermission')(app);
    require('./forms/misc/cu-focus')(app);
    require('./forms/misc/pw-check')(app);
    require('./nav/nav-info')(app);
    require('./nav/menus')(app);
};