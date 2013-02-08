define(["app"], function(app) {
	"use strict";

	var logoutController = function($scope, $location) {
		$scope.$on('$viewContentLoaded', function() {
			$location.path("/blog/").replace();
			$scope.$apply();
		});
	};
	
	app.controller("logoutController", logoutController);
});
