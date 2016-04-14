module.exports = function(app){
    require('./auth/authInterceptor')(app);
    require('./auth/configInterceptor')(app);
    require('./auth/auth')(app);
    require('./config')(app);
};