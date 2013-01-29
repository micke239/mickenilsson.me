var init = function(app) {
	"use strict";
	
    app.get("/demo/", function(req, res) {
    	res.send("");
    });
};

module.exports = init;