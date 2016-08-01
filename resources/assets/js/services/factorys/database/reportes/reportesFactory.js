module.exports = function(app){
    app.factory('reportesFactory', function($resource) {
        return $resource('/api/admin/reportes/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{ query:"@query", page:"@page"},
                url:'/api/admin/secciones/search/:query'
            }
        });
    });
};