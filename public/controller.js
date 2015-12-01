angular.module('ecommerceApp').controller('mainCtrl', function($scope, productsService) {

	$scope.getProducts = function () {
		productsService.getProducts().then(function(res) {
			$scope.products = res.data;
			console.log($scope.products);
		});
	};

	$scope.getProducts();

});