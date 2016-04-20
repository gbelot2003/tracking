module.exports = function(app){
	app.directive('configuraMn', function($location, authentication, permService){
		return {
			restrict: 'AE',
			template: require('raw!./configura-mn.html'),

			controller: function($scope){
			},
            
		};
	});
};