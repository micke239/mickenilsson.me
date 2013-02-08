define(["app", "jquery"], function(app, $) {
	"use strict";

	var loginController = function($scope, $routeParams, $location) {
		$scope.login = function() {
			$.post("/login/", {username: $scope.username, password: $scope.password}).success(function(data) {
				$location.path("/blog/").replace();
	    		$scope.$apply();
			}).fail(function(data) {
				alert("bad credentials :/");				
			});				
		};
	};
	
	app.controller("loginController", loginController);
});
