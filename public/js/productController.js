 //var baseURL='http://192.168.1.6:3000/api/';
 var baseURL='http://gnossem.fountaintechies.com:3000/api/';
function ProductController($scope,$rootScope, $http ,$stateParams) {
	var id = $stateParams.pId;
 	$scope.bags = {};
    $http.get(baseURL+'products/cat/'+id).success(function (data) {
    	 $scope.bags = data; 
    	  $rootScope.objects = $scope.bags;     
    })
   .error(function () {
        alert("Please check your internet connection or data source..");
    });
    
  }
   function ProductDetailController($scope,$stateParams,$rootScope) {
        var id = $stateParams.pId;
         var obj = $rootScope.objects; 
 	    $scope.productCatId=id;
 	    var results = [];
		var searchField = "product_id";
		var searchVal = id;
		for (var i=0 ; i < obj.length ; i++)
		{
		    if(obj[i][searchField] == searchVal)
		    	{
		    		$scope.productDetail = obj[i];
		    		break;
		    	}
		}
 
   	}