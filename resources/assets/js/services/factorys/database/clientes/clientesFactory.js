module.exports = function(app){
    app.factory('clientesFactory', function($resource) {
        return $resource('/api/admin/clientes/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'search': {method:'GET',
                params:{ query:"@query", page:"@page"},
                url:'/api/admin/clientes/search/:query'
            }
        });
    });
};