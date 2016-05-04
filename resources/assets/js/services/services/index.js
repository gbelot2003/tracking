module.exports = function(app){
	require('./database');
	require('./statics')(app);
};