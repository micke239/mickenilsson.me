var createBlogPostContentModel = function() {
	var dbFactory = require("../factory/dbFactory"),
		Schema = dbFactory.getSchema();

	var blogPostContentSchema = new Schema({
		heading: String,
		content: String,
		edited: Date
	});

	return dbFactory.getDb().model("BlogPostContent", blogPostContentSchema);
};


module.exports = createBlogPostContentModel();
