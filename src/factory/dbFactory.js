var DbFactory = function() {
	"use strict";

	var mongoose, db, schema;

	mongoose = require("mongoose");
	db = mongoose.createConnection("localhost", "site");
	db.on("error", console.error.bind(console, 'connection error:'));
	db.once("open", function () {
  		console.log("connected to mongodb");
	});

	this.getDb = function() {
		return db;
	};

	this.getSchema = function() {
		return mongoose.Schema;
	};
};


module.exports = new DbFactory();