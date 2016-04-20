module.exports = function(app){
    app.service('authentication', function($http){

        this.login = function(user){
            return $http.post('api/authenticate', {email: user.email, password: user.password});
        };

        this.logout = function(){
            return $http.delete('/logout')
        };

        this.isLoggedIn = function(){
            return (localStorage.getItem('satellizer_token')) ? true : false;
        };

        this.hasPerms = function(rolesConllection){
            var roles = [];
            roles = rolesConllection;
            actualRol = localStorage.getItem('rol');
            var perms = _.contains(roles, actualRol);
            return perms;
        }

    });
};