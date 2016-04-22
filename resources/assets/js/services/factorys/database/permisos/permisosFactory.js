module.exports = function(app){
	app.factory('permisosFactory',function($resource){
		return $resource('/api/admin/permisos/:id',
			{id: '@id'},
            {
                'update': {method: 'PUT'}
            });
	});
};