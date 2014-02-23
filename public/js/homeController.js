function HomeController($scope,$location,localStorageService) {
	$scope.goPage = function(btnName) {
		if(btnName=='home'){
			$location.path("/Home");
		}else if(btnName=='cart'){
			var product=localStorageService.get('cart');
			if(product!=null){
				$location.path("/Cart");
			}else{
				alert("You have no item in your Cart");
			}
		}else if(btnName=='wishlist'){
			var product=localStorageService.get('wishlist');
			if(product!=null){
				$location.path("/Wishlist");
			}else{
				alert("You have no item in your WishList");
			}
			
		}else if(btnName=='thanks'){
			$location.path("/Thanks");
			localStorageService.remove('cart');
		}else {
			$location.path("/Products/cat/"+btnName);
		}
		
	};
	$scope.productDetail = function(pId) {
		$location.path("/ProductDetail/"+pId);
	};
	
    $scope.openLeft = function() {
      $scope.sideMenuController.toggleLeft();
    };


}


