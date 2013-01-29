var init = function(app) {
	"use strict";
	
    app.get("/links/", function(req, res) {
    	res.write("");
    });
};

module.exports = init;