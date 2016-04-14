// Esta se llamara especialmente desde config, aunque se coloca en esta carpeta porque pertenece al sistema
// de autentificación
module.exports = function(app){
    app.config(function($httpProvider){
        $httpProvider.interceptors.push('authInterceptor');
    });
};
