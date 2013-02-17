var init = function(app) {
	"use strict";
	
	app.get("/ajax/index/", function(req, res) {
	    res.render("index");
	});
}

module.exports = init;