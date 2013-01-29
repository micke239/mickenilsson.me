define(["jquery"], function($) {
	var BlogHomeController = function($scope, $routeParams, $location) {
		$scope.$on('$viewContentLoaded', function() {
			if ($("#demo-right").length === 0) {
				$.get("/blog/right-column/", function(data) {
					$("#right-col").html(data);
				});
			}
		});

		$scope.new = function() {
			$.get("/blog/create/", function(data) {
				if (data && "redirect" in data) {
    				$location.path(data.redirect).replace();
	    			$scope.$apply();
				}
			});
		};

		$scope.publish = function(id) {
			$.post("/blog/publish/", {_id: id}, function(data) {
				if (data && data.success) {
					$("#publish-" + id + ", #unpublish-" + id).toggleClass("hidden");
				}
			});
		};

		$scope.unpublish = function(id) {
			$.post("/blog/unpublish/", {_id: id}, function(data) {
				if (data && data.success) {
					$("#publish-" + id + ", #unpublish-" + id).toggleClass("hidden");
				}
			});
		};
	};

	return BlogHomeController;
});