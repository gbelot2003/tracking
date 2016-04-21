module.exports = function(app){
	app.factory('permisosFactory',function($resource){
		return $resource('/api/admin/users/:id',
			{id: '@id'},
            {
                'update': {method: 'PUT'},
                'query': {method: 'GET', isArray: true, transformResponse: function(data, header){
                    var jsonData = JSON.fromJson(data);
                    jsonData.data = jsonData.data.map(function (beer) {
                        return new resource(beer)
                    });
                }}
            });
	});
};