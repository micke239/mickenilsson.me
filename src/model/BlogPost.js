var createBlogPostModel = function() {
	"use strict";
	
	var dbFactory = require("../factory/dbFactory"),
	Schema = dbFactory.getSchema();

	var blogPostSchema = new Schema({
		created: Date,
		live: {type: Schema.Types.ObjectId, ref: "BlogPostContent"},
		preview: {type: Schema.Types.ObjectId, ref: "BlogPostContent"}
	});

	return dbFactory.getDb().model("BlogPost", blogPostSchema);
}


module.exports = createBlogPostModel();