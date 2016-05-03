module.exports = function(app){
    app.factory('transitosFactory', function($resource) {
        return $resource('/api/admin/transitos/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{
                    query:"@query",
                    date: "@date",
                    type: "@type",
                    page:"@page"},
                url:'/api/admin/transitos/search/:date/:query/:type'
            }
        });
    });
};