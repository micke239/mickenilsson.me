require(["jquery", "app", "controller/controllers"], function($, app, controllers) {
	app.config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when("/", {
            redirectTo : "/blog/"
        }).when("/blog/", {
            controller: controllers.BlogHomeController,
            templateUrl : "/blog/"
        }).when("/blog/:id/:slug/", {
            controller : controllers.BlogPostController,
            templateUrl : "/blog/post/"
        }).when("/links/", {
            templateUrl : "/links/"
        }).when("/demo/", {
            templateUrl : "/demo/"
        }).when("/login/", {
            controller : controllers.LoginController,
            templateUrl : "/login/"
        }).when("/logout/", {
            templateUrl : "/logout/",
			redirectTo : function() {
				console.log(arguments);
				
				return "/blog/";
			}
        }).otherwise({
            redirectTo : "/blog/"
        });
	});
});
