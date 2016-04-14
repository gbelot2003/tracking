module.exports = function(app){
    app.service('auth', function($http){
        this.login = function(user){
            return $http.post('api/authenticate', {email: user.email, password: user.password});
        };

        this.logout = function(){
            return $http.delete('/logout')
        };

        this.isLoggedIn = function(){
            return (localStorage.getItem('satellizer_token')) ? true : false;
        };

    });
};