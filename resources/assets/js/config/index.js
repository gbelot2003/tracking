module.exports = function(app){
    require('./config')(app);
    require('./toast-config')(app);
    require('./auth/authInterceptor')(app);
    require('./auth/configInterceptor')(app);
    require('./auth/auth')(app);
    require('./auth/credentials')(app);
    require('./auth/permissionService')(app);
};