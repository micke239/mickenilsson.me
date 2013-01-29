define(["jquery"], function($) {
	"use strict";
	var BlogPostController = function($scope, $routeParams, $location) {
		var getPostContent = function() {
			$.get("/blog/post/" + $routeParams.id + "/" + $routeParams.slug + "/").
	    		success(function(data) {
	    			if (data.changeSlug != undefined) {
	    				$location.path("/blog/" + $routeParams.id + "/" + data.changeSlug + "/").replace();
	    				$scope.$apply();
	    			} 
					
					$("#post-content").html(data);
	    		}).fail(function(data) {
					$location.path("/blog/").replace();
					$location.search("error", 404);
					$scope.$apply();
				});
		};

	    $scope.$on('$viewContentLoaded', function() {
	    	getPostContent();

			if ($("#demo-right").length === 0) {
				$.get("/blog/right-column/", function(data) {
					$("#right-col").html(data);
				});
			}
	    });

	    $scope.editContent = function() {
	    	$("#post-content #heading").attr("contenteditable", "true");

	    	$("#post-content .markdown-content").addClass("hidden");
	    	$("#post-content .markdown-textarea").removeClass("hidden");


	    	$("#save, #revert, #preview").removeClass("hidden");
	    	$("#edit, #edit-preview").addClass("hidden");
	    	$("html, body").animate({ scrollTop: $("#post-content #heading").offset().top - 10 }, 50);
	    };

	    $scope.save = function() {
	    	var newContent = {};

    		newContent.heading = $("#post-content #heading").text();
	    	newContent.content = $("#post-content .markdown-textarea textarea").val();
	    	newContent._id = $routeParams.id;

	    	$.post("/blog/save/", newContent).success(function(data) {
	    		if (data.success) {
    				$scope.$apply(function() {
	    				$location.path("/blog/" + data.id + "/reload/").replace();
					});
	    		} else {
	    			alert("failed to save article :(");
	    		}
	    	});
	    };

	    $scope.revert = function() {
	    	if (confirm("are you sure you want to revert the changes?")) {
		    	getPostContent();

	    		$("#save, #revert, #preview, #edit-preview").addClass("hidden");
	    		$("#edit").removeClass("hidden");
	    	}	
	    };

	    $scope.preview = function() {
	    	var params = {
				markdown: $("#post-content .markdown-textarea textarea").val()
	    	};

	    	$.post("/blog/convert-markdown/", params).success(function(data) {
	    		var content = $("#post-content .markdown-content");
	    		content.html(data);

				$("#post-content .markdown-textarea").addClass("hidden");
	    		content.removeClass("hidden");

	    		$("#post-content #heading").attr("contenteditable", "false");

	    		$("#preview").addClass("hidden");
	    		$("#edit-preview").removeClass("hidden");
	    	});
	    };
	};

	return BlogPostController;
});