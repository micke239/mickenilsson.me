var UserService = function() {
    "use strict";

    var User = require("../model/User"),
    	crypto = require("crypto");

    var md5 = function(string) {
    	return crypto.createHash("md5").update(string).digest("hex");
    };

    this.login = function(user, callback) {
    	User.findOne().where("username").equals(user.username).exec(function(err, res) {
  			if (res && res.password === md5(user.password)) {
    			callback(true);
    		} else {
    			callback(false);
    		}
    	});
    };
};

module.exports = new UserService;