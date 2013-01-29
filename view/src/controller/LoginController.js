define(["jquery"], function($) {
	"use strict";

	var LoginController = function($scope, $routeParams, $location) {
		$scope.login = function() {
			$.post("/login/", {username: $scope.username, password: $scope.password}).success(function(data) {
				$location.path("/blog/").replace();
	    		$scope.$apply();
			}).fail(function(data) {
				alert("bad credentials :/");				
			});				
		};
	};

	return LoginController;
});
