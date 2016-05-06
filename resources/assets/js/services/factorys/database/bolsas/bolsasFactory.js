module.exports = function(app){
    app.factory('bolsasFactory', function($resource) {
        return $resource('/api/admin/bolsas/:id', { id: '@id', page:'@page'}, {
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