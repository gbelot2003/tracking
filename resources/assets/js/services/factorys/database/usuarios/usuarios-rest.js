module.exports = function(app){
    app.factory('usuariosRest', function($resource) {
        return $resource('/api/entries/:id',  { id: '@_id' },{
            update:{
                method:'PUT'
            }
        });
    });
};