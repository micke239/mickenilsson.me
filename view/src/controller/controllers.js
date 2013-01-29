define(["controller/BlogPostController", "controller/BlogHomeController", "controller/LoginController"], 
	function(BlogPostController, BlogHomeController, LoginController) {	

	"use strict";
	
	
	return {
		BlogPostController: BlogPostController, 
		BlogHomeController: BlogHomeController,
		LoginController: LoginController
	}
});
