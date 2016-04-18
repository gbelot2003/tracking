module.exports = function(app){
    app.config(['ngToastProvider', function(ngToastProvider){
        ngToastProvider.configure({
            animation: 'fade'
        });
    }]);
};