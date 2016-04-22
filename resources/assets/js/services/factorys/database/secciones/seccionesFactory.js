module.exports = function(app){
    app.factory('seccionesFactory', function($resource) {
        return $resource('/api/admin/secciones/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{ query:"@query", page:"@page"},
                url:'/api/admin/secciones/search/:query'
            }
        });
    });
};