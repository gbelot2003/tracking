var transitos = function($scope, $uibModalInstance){

    $scope.cancel = function (num) {
        $uibModalInstance.close(num);
    };

};

module.exports = function(app){
    app.controller('transitoWarningController', function($scope, $uibModalInstance){
        return transitos($scope, $uibModalInstance);
    })
};
