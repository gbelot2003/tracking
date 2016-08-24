module.exports = function(app){
    app.factory('reportesFactory', function($resource) {
        return $resource('/api/admin/reportes/:id', { id: '@id', page:'@page'}, {
            'update':{method:'PUT'},
            'query': {method:'GET',
                params:{
                    bDate:"@bDate",
                    eDate: "@eDate",
                    id:"@id",
                    estado_id:"@estado_id",
                    page:"@page"
                },
                url:'/api/admin/reportes-general-por-usuario/:bDate/:eDate/:id/:estado_id'
            },
            'listadoPorPaquete' : {
                params:{
                    bDate:"@bDate",
                    eDate: "@eDate",
                    estado: "@estado",
                    page: "@page"
                },
                url:'/api/admin/listado-por-estados/:bDate/:eDate/:estado'
            }
        });
    });
};