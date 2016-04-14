module.exports = function(app){
    app.service('credent', function($http){
        this.getCredentials = function(user){
            return $http.get('api/authenticate/user');
        };
    });
};