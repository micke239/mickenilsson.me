define(["app", "jquery"], function(app, $) {

    var blogHomeController = function($scope, $routeParams, $location) {
        $scope.newPost = function() {
            $.get("/ajax/blog/create/", function(data) {
                if (data && "redirect" in data) {
                    $location.path(data.redirect).replace();
                    $scope.$apply();
                }
            });
        };

        $scope.publish = function(id) {
            $.post("/ajax/blog/publish/", {
                _id: id
            }, function(data) {
                if (data && data.success) {
                    $("#publish-" + id + ", #unpublish-" + id).toggleClass("hidden");
                }
            });
        };

        $scope.unpublish = function(id) {
            $.post("/ajax/blog/unpublish/", {
                _id: id
            }, function(data) {
                if (data && data.success) {
                    $("#publish-" + id + ", #unpublish-" + id).toggleClass("hidden");
                }
            });
        };

        $scope.remove = function(id) {
            $.post("/ajax/blog/remove/", {
                _id: id
            }, function(data) {
                if (data && data.success) {
                    $("#post-" + id).remove();
                }
            });
        };
    };

    app.controller("blogHomeController", blogHomeController);
});
