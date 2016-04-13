module.exports = function(app){
    require('../services/auth/authInterceptor')(app);
    require('../services/auth/configInterceptor')(app);
    require('./config')(app);
};