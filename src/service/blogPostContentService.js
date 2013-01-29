var BlogPostContentService = function() {
    "use strict";
    var BlogPostContent = require("../model/BlogPostContent");

    this.save = function(content, callback) {
    	var content = new BlogPostContent(content);

    	content.save(function(err) {
    		if (err) {
	            console.error("Error when saving BlogPostContent: " + err);
	            callback(false);
    		}

    		callback(content);
    	});
    };
};

module.exports = new BlogPostContentService();