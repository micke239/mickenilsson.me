var init = function(app) {
	"use strict";
	
    app.get("/ajax/demo/", function(req, res) {
    	res.render("demo");
    });
};

module.exports = init;