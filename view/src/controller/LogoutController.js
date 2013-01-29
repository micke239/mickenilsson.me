define(function() {
	"use strict";

	var LogoutController = function($scope, $location) {
		$scope.$on('$viewContentLoaded', function() {
			$location.path("/blog/").replace();
			$scope.$apply();
		});
	};

	return LoginController;
});
