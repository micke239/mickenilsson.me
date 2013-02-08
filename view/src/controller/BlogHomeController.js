define(["app", "jquery"], function(app, $) {

    var blogHomeController = function($scope, $routeParams, $location) {
        $scope.$on('$viewContentLoaded', function() {
            var elements = $("ul.nav.nav-pills li");
            elements.removeClass("active");
            elements.find("a.blog").parent().addClass("active");

            if ($("#demo-right").length === 0) {
                $.get("/blog/right-column/", function(data) {
                    $("#right-col").html(data);
                });
            }
        });

        $scope.newPost = function() {
            $.get("/blog/create/", function(data) {
                if (data && "redirect" in data) {
                    $location.path(data.redirect).replace();
                    $scope.$apply();
                }
            });
        };

        $scope.publish = function(id) {
            $.post("/blog/publish/", {
                _id: id
            }, function(data) {
                if (data && data.success) {
                    $("#publish-" + id + ", #unpublish-" + id).toggleClass("hidden");
                }
            });
        };

        $scope.unpublish = function(id) {
            $.post("/blog/unpublish/", {
                _id: id
            }, function(data) {
                if (data && data.success) {
                    $("#publish-" + id + ", #unpublish-" + id).toggleClass("hidden");
                }
            });
        };
    };

    app.controller("blogHomeController", blogHomeController);
});
