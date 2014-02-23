function CartController($scope,$location,$rootScope,localStorageService) {

	$scope.goPage = function(btnName) {
		if(btnName=='home'){
			$location.path("/Home");
		}		
	};
	
    $scope.openLeft = function() {
      $scope.sideMenuController.toggleLeft();
    };
 
    $scope.addToWishList = function(object) {
    	localStorageService.add('wishlist',object);
     	//$rootScope.wishListProduct=object;
     	alert("Product added Successfully in WishList");
     	
    };
     $scope.addToCartList = function(object) {    	
     	localStorageService.add('cart',object);
		//$rootScope.cartProduct =object;
		alert("Product added Successfully in your Cart");
    };
}

function CartProductList($scope,$location,$rootScope,localStorageService) {
	$rootScope.cproduct=localStorageService.get('cart');
}

function WishList($scope,$location,$rootScope,localStorageService) {
	$rootScope.wProduct=localStorageService.get('wishlist');
}
