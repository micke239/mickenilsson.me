(function() {
    "use strict";
    
    var configDeps = [
        "configuration/require",
        "configuration/controller",
        "configuration/constant"
    ];

    require(configDeps, function() {
        require(["bootstrap"]);
        require(["app", "angular"], function(app, angular) {
            app.config(function($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider.

                //index
                when("/", {
                    templateUrl: "/ajax/index/",
                    controller: "indexController"
                }).

                //blog
                when("/blog/", {
                    controller: "blogHomeController",
                    templateUrl: "/ajax/blog/"
                }).

                //blog post
                when("/blog/:id/:slug/", {
                    controller: "blogPostController",
                    templateUrl: "/ajax/blog/post/"
                }).

                // links
                when("/links/", {
                    templateUrl: "/ajax/links/"
                }).

                //demo
                when("/demo/", {
                    templateUrl: "/ajax/demo/"
                }).

                //login
                when("/login/", {
                    controller: "loginController",
                    templateUrl: "/ajax/login/"
                }).

                //logout
                when("/logout/", {
                    templateUrl: "/ajax/logout/",
                    redirectTo: "/blog/"
                }).

                //else just redirect to index
                otherwise({
                    redirectTo: "/"
                });
            });
            
            app.run(function($rootScope) {
                $rootScope.url = function(url) {
                    return "#!" + url;
                };
            });
            
            angular.element(document).ready(function() {
            	angular.bootstrap(document, ["app"]);
            });
        });
    });
}());