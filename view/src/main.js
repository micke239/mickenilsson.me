(function() {
    "use strict";
    
    var configDeps = [
        "configuration/require",
        "configuration/controller",
        "configuration/constant"
    ];

    require(configDeps, function() {
        require(["app", "angular"], function(app, angular) {
            app.config(function($routeProvider, $locationProvider, $) {
                $locationProvider.hashPrefix('!');
                $routeProvider.

                //index
                when("/", {
                    redirectTo: "/blog/"
                }).

                //blog
                when("/blog/", {
                    controller: "blogHomeController",
                    templateUrl: "/blog/"
                }).

                //blog post
                when("/blog/:id/:slug/", {
                    controller: "blogPostController",
                    templateUrl: "/blog/post/"
                }).

                // links
                when("/links/", {
                    templateUrl: "/links/",
                    controller: function($scope) {
                        $scope.$on("$viewContentLoaded", function() {
                            var elements = $("ul.nav.nav-pills li");
                            elements.removeClass("active");
                            elements.find("a.links").parent().addClass("active");
                        });
                    }
                }).

                //demo
                when("/demo/", {
                    templateUrl: "/demo/",
                    controller: function($scope) {
                        $scope.$on("$viewContentLoaded", function() {
                            var elements = $("ul.nav.nav-pills li");
                            elements.removeClass("active");
                            elements.find("a.demo").parent().addClass("active");
                        });
                    }
                }).

                //login
                when("/login/", {
                    controller: "loginController",
                    templateUrl: "/login/"
                }).

                //logout
                when("/logout/", {
                    templateUrl: "/logout/",
                    redirectTo: "/blog/"
                }).

                //else just redirect to index
                otherwise({
                    redirectTo: "/"
                });
            });
            
            angular.element(document).ready(function() {
            	angular.bootstrap(document, ["app"]);
            });
        });
    });
}());