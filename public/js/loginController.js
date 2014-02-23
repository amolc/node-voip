 //var baseURL='http://192.168.1.6:3000/api/';
var baseURL='http://gnossem.fountaintechies.com:3000/api/';
function Login($scope,$location,$http) {
  $scope.user = {username: '', passwordp: ''};
  
    $scope.login = function(user) {
    	if(user.username==''){
    		alert('Enter valid User Name ');
    	}else if(user.passwordp==''){
    		alert('Enter valid Password ');
    	}else{
    		 $http.post(baseURL+'loginsignup',user).success(function (res) { 
              $scope.response = res;  
              if(res.status=='false'){
              	  alert(res.message);
              }else{
              	$location.path("/Home");
              }
        })
        .error(function () {
             
              alert("Please check your internet connection or data source..");
        });
    		
    	}
        
	};
	
	$scope.gonext = function() {
    	$location.path("/Singup");
	};
}