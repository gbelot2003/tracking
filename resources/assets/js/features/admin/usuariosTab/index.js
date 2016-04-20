module.exports = function(app){
		require('./usuarios')(app);
		require('./permisos')(app);
};