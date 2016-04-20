module.exports = function(app){
    app.factory('menuList', function(){
        return [
            {title: 'Home', url: '#/', login: false},
        ];
    })
}