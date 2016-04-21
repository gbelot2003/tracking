module.exports = function(app){
	app.factory('permisosFactory',function($resource){
		return $resource('/api/admin/permisos/:id',
			{id: '@id'},
            {
                'update': {method: 'PUT'},
                'query': {method: 'GET', isArray: true, transformResponse: function(data, header){
                    var jsonData = JSON.parse(data);
                    header()['total'] = jsonData.total;
                    header()['current_page'] = jsonData.current_page;
                    return jsonData.data;
                }}
            });
	});
};