module.exports = function(app){
    app.factory('shipmentFactory', function($resource) {
        return $resource('/api/admin/paquetes/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},

            'query': {method:'GET',
                params:{
                    query:"@query",
                    date: "@date",
                    type: "@type",
                    page:"@page"},
                url:'/api/admin/paquetes/search/:date/:query/:type'
            },

            'byCode':{method:'GET',
                params:{
                    code:"@code",
                    bag:"@bag"
                },
                url:'/api/admin/paquetes/find-by-code/:code/:bag'
            },
            'removeByCode':{method: 'GET',
                params:{
                    code:'@code',
                    bag:'@bag',
                    index:'@index',
                    type:'@type'
                },
                url:'/api/admin/paquetes/remove-by-code/:code/:bag/:index/:type'
            },

            'checkCode':{method:'GET',
                params:{
                    code:"@code"
                },
                url:'/api/admin/paquetes/check-by-code/:code'
            },
            'checkStateByCode':{method:'GET',
                params:{
                    code:"@code"
                },
                url:'/api/admin/paquetes/check-state-by-code/:code'
            }
        });
    });
};