angular.module('ecommerceApp').service('productsService', function($http) {

	this.getProducts = function () {
		return $http({
			method: 'GET',
			url: 'http://localhost:9001/products',
		});
	};
});