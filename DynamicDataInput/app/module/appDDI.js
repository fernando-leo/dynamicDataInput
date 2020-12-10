var app = angular.module('appDDI')
	.config(function ($routeProvider, $locationProvider) {


		$routeProvider.when('/', { templateUrl: 'app/view/index.html', controller: 'ddiController' }),
			$routeProvider.when('/edit', { templateUrl: 'app/view/edit.html', controller: 'ddiEditController' })
		$routeProvider.otherwise({ redirectTo: '/home' });

	}).run(function ($rootScope, $location, $log, $http) {
		$rootScope.title = '';

	});