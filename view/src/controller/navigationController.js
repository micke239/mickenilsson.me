define(["app"], function(app) {
	"use strict";

	var navigationController = function($scope, $location) {
		$scope.isActive = function(page) { 
		    var currentRoute = $location.path().split("/")[1] || "home";

		    return page === currentRoute;
		};
	};
	
	app.controller("navigationController", navigationController);
});
