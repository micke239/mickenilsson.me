var init = function(app) {
	"use strict";
	
    app.get("/ajax/links/", function(req, res) {
    	res.render("links");
    });
};

module.exports = init;