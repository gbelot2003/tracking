module.exports = function(app){
	require('./factorys')(app);
    require('./services')(app);
    require('./filters')(app);
};