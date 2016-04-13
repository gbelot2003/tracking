module.exports = function(app){
    require('./index/indexController')(app);
    require('./login/loginController')(app);
    require('./admin')(app);
};