(function(){
	
	angular.module("watermarker", ['ngRoute'])
	.config(function($routeProvider){

		$routeProvider
		.when('/', {

			templateUrl: 'views/main.html',
			controller: 'indexCtrl',
			controllerAs: 'vm'

		})
		.when('/camera', {

			templateUrl: 'views/camera.html',
			controller: 'cameraCtrl',
			controllerAs: 'vm'

		})
		.when('/gallery', {
			templateUrl: 'views/gallery.html',
			controller: 'galleryCtrl',
			controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/'});

	});


})();