module.exports = function(app){
	require('./factorys')(app)
    require('./services')(app);
};