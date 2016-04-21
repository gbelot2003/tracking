module.exports = function(app){
    app.factory('usuariosFactory', function($resource) {
        return $resource('/api/admin/users/:id',  
                    { 
                        id: '@id',
                        page:'@page'
                    },
                {
            	'update':{method:'PUT'},

            	'query':
            	{
            		method:'GET',
            		params:{
            			query:"@query",
            			page:"@page",
            		},
            		url:'/api/admin/users/search/:query'
            	},
        });
    });
};