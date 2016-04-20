module.exports = function(app){
	app.directive('usuariosMn', function($location, authentication, permService){
		return {
			restrict: 'AE',
			template: require('raw!./usuarios-mn.html'),

			controller: function($scope){
			},
            
		};
	});
};