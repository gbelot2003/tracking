module.exports = function(app){
    app.factory('shipmentFactory', function($resource) {
        return $resource('/api/admin/paquetes/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{
                    query:"@query",
                    date: "@date",
                    page:"@page"},
                url:'/api/admin/paquetes/search/:query/:date'
            }
        });
    });
};