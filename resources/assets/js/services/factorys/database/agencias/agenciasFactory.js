module.exports = function(app){
    app.factory('agenciasFactory', function($resource) {
        return $resource('/api/admin/agencias/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{ query:"@query", page:"@page"},    
            	url:'/api/admin/agencias/search/:query'
            },
            'create': {
                url:'/api/admin/agencias/create'
            },
            'single':{
                method: 'GET',
                params:{id:"@id"},
                url:'/api/admin/agencias/single-search/:id'
            }
        });
    });
};