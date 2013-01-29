var createUserModel = function() {
	"use strict";
	
	var dbFactory = require("../factory/dbFactory"),
	Schema = dbFactory.getSchema();

	var userSchema = new Schema({
		username: {type: String, required: true, index: {unique: true}},
		password: {type: String, required: true}
	});

	return dbFactory.getDb().model("User", userSchema);
}


module.exports = createUserModel();