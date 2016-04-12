module.exports = function(app){
    require('./config')(app);
    require('./run')(app);
};