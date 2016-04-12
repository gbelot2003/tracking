var run = function($rootScope, $state){
    $rootScope.$on('$stateChangeStart', function(event, toState) {
        var user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            $rootScope.authenticated = true;
            $rootScope.currentUser = user;
            if(toState.name === "auth"){
                event.preventDefault();
                $state.go('users');
            }
        }
    });
};

module.exports  = function(app){
    app.run(function($rootScope, $state){
        return run($rootScope, $state);
    })
};