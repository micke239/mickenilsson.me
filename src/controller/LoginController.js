var init = function(app) {
	"use strict";

	var userService = require("../service/userService");

	app.get("/login/", function(req, res) {
		res.render("login");
	});

	app.get("/logout/", function(req, res) {
		req.session.admin = false;
		
		res.send("Logged out successfully!");
	});

	app.post("/login/", function(req, res) {
		var callback = function(success) {
			
			if (success) {
				req.session.admin = true;
				res.json({loggedIn: true});
			} else {
				res.json(401, {loggedIn: false});
			}
		};

		userService.login({
			username: req.body.username, 
			password: req.body.password
		}, callback);
	});
};

module.exports = init;