var BlogPostService = function() {
    "use strict";

    var blogPostContentService = require("./blogPostContentService"),
        BlogPost = require("../model/BlogPost"),
        self = this;

    this.getBlogPost = function (id, callback) {
        BlogPost.findById(id).populate("live").populate("preview").exec(function(err, res) {
            if (err) {
                console.error("Error when fetching BlogPost with id " + id + ": " + err);
                callback();
            }

            callback(res);
        });
    };

    this.getAll = function(callback) {
        BlogPost.find().populate("live").populate("preview").sort({created: "desc"}).exec(function (err, res) {
            if (err) {
                console.error("Error when fetching all BlogPosts: " + err);
                callback();
            }
            
            callback(res);
        });
    };

    this.getAllPublished = function(callback) {
        BlogPost.where("live").ne(null).populate("live").populate("preview").sort({created: "desc"}).exec(function (err, res) {
            if (err) {
                console.error("Error when fetching all published BlogPosts: " + err);
                callback();
            }
            
            callback(res);
        });
    };

    this.publish = function(id, callback) {
        self.getBlogPost(id, function(blogPost) {
            if (blogPost) {
                var postUpdated = function(err, numberAffected) {
                    if (err) {
                        console.error("Error when publish BlogPost with id " + blogPost._id + ": " + err);
                        callback(false);
                    }

                    callback(numberAffected === 1);
                };

                BlogPost.update({_id: blogPost._id}, { preview: null, live: blogPost.preview }, postUpdated);
            }
        });
    };

    this.publish = function(id, callback) {
        self.getBlogPost(id, function(blogPost) {
            if (blogPost) {
                var postUpdated = function(err, numberAffected) {
                    if (err) {
                        console.error("Error when publish BlogPost with id " + blogPost._id + ": " + err);
                        callback(false);
                    }

                    callback(numberAffected === 1);
                };

                BlogPost.update({_id: blogPost._id}, { preview: null, live: blogPost.preview }, postUpdated);
            }
        });
    };

    this.remove = function(id, callback) {
        BlogPost.remove({_id: id}, function(err, numberAffected) {
            if (err) {
                console.error("Error when publish BlogPost with id " + blogPost._id + ": " + err);
                callback(false);
            }

            callback(numberAffected === 1);
        });
    };

    this.save = function(blogPost, callback) {
        var contentSaved = function(content) {
            if (content) {
                var postUpdated = function(err, numberAffected) {
                    if (err) {
                        console.error("Error when saving BlogPost with id " + blogPost._id + ": " + err);
                        callback(false);
                    }

                    callback({id: blogPost._id, heading: content.heading});                
                };  
                
                BlogPost.update({_id: blogPost._id}, { preview: content._id }, postUpdated);
            } else {
                callback(false);
            }         
        };

        var content = {
            heading: blogPost.heading,
            content: blogPost.content,
            edited: new Date()
        };

        blogPostContentService.save(content, contentSaved);    
    };

    this.createBlogPost = function(callback) {
        var contentSaved = function(content) {
            if (content) {
                var blogPost = new BlogPost({
                    preview: content._id,
                    created: new Date()
                });

                var postSaved = function(err) {
                    if (err) {
                        console.error("Error when creating a new BlogPost: " + err);
                        callback(false);
                    }

                    callback({blogPost: blogPost, content: content});                
                };

                blogPost.save(postSaved);
            } else {
                callback(false);
            }         
        };

        var content = {
            heading: "I gotta piss",
            content: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
            edited: new Date()
        };

        blogPostContentService.save(content, contentSaved);
    };
};

module.exports = new BlogPostService();
