module.exports = function(app){
    app.factory('transitosBolsasFactory', function($resource) {
        return $resource('/api/admin/bolsas-transitos/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{
                    query:"@query",
                    date: "@date",
                    type: "@type",
                    page:"@page"},
                url:'/api/admin/bolsas/search/:date/:query/:type'
            }
        });
    });
};