// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('gnossem', ['ionic',  'gnossem.controllers','LocalStorageModule'])


    .config(function ($stateProvider, $urlRouterProvider) {
	
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
        
            .state('login', {
                url: '/Login',
                templateUrl: 'templates/login.html'
            })
			
			.state('Singup', {
				url: '/Singup',
				templateUrl: 'templates/signup.html'
			})
			.state('Home', {
				url: '/Home',
				templateUrl: 'templates/home.html'
			})
			
			.state('Products', {
				url: '/Products/cat/:pId',
				templateUrl: 'templates/products.html'
			})
			.state('ProductDetail', {
				url: '/ProductDetail/:pId',
				templateUrl: 'templates/product_detail.html'
			})
			.state('Cart', {
				url: '/Cart',
				templateUrl: 'templates/mycart.html'
			})
			.state('Wishlist', {
				url: '/Wishlist',
				templateUrl: 'templates/mywishlist.html'
			})
			.state('Thanks', {
				url: '/Thanks',
				templateUrl: 'templates/thanks.html'
			});
            
        $urlRouterProvider.otherwise('/Login');

    });
