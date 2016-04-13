module.exports = function(app){
    require('./auth/auth')(app);
    require('./auth/authInterceptor')(app);
    require('./menuList/menuList')(app);
};