//var baseURL='http://192.168.1.6:3000/api/';
var baseURL='http://gnossem.fountaintechies.com:3000/api/';
function Signup($scope,$location,$http) {
  $scope.user = {name: '', email: '', passwordp: ''};
    $scope.signup = function(user) {
    	if(user.name==''){
    		alert('Enter valid User Name ');
    	}else if(user.email==''){
    		alert('Enter valid Email ');
    	}else if(user.passwordp==''){
    		alert('Enter valid Password ');
    	}else{
    		console.log(user);
    		 $http.post(baseURL+'loginsignup/signup',user).success(function (res) { 
              $scope.response = res;  
              if(res.status=='false'){
              	  alert(res.message);
              }else{
              	$location.path("/Login");
              }
        })
        .error(function () {
             
             alert("Please check your internet connection or data source..");
                
            
        });
    	}
        
	};
	
	$scope.cancel = function() {
        $location.path("/Login");
	};
}