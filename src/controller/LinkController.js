var init = function(app) {
	"use strict";
	
    app.get("/links/", function(req, res) {
    	res.render("links");
    });
};

module.exports = init;