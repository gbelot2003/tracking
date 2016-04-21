var listado = function($scope, permisosFactory, $uibModalInstance, id){

	permisosFactory.get({id:id}, function (response){

		$scope.perm = response;
		$scope.permiso = response.users;

  		$scope.viewby = 5;
  		$scope.totalItems = $scope.permiso.length;
  		$scope.currentPage = 1;
  		$scope.itemsPerPage = $scope.viewby;
  		$scope.maxSize = 5; //Number of pager buttons to show
	  	
		$scope.paginating = true;  	
	  	if($scope.totalItems < 6){
	  		$scope.paginating = false;	
	  	}

	  	$scope.setPage = function (pageNo) {
	  		$scope.currentPage = pageNo;
  		};

		$scope.pageChanged = function() {
    		console.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.setItemsPerPage = function(num) {
			$scope.itemsPerPage = num;
			$scope.currentPage = 1; //reset to first paghe
		};

	});

	$scope.title = "Listado de ";


	$scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
};

module.exports = function(app){
	app.controller('showListController', function($scope, permisosFactory, $uibModalInstance, id){
		return listado($scope, permisosFactory, $uibModalInstance, id);
	});
}