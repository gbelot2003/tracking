var listados = function($scope, bolsasFactory, shipmentFactory, $location){

};

module.exports = function(app){
    app.controller('bolsasListadoController', function($scope, bolsasFactory, shipmentFactory, $location){
        return listados($scope, bolsasFactory, shipmentFactory, $location)
    });
};