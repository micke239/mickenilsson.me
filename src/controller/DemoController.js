var init = function(app) {
	"use strict";
	
    app.get("/demo/", function(req, res) {
    	res.render("demo");
    });
};

module.exports = init;