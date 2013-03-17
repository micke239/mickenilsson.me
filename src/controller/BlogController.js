var init = function(app) {
	"use strict";

	var stringUtil = require("../util/stringUtil"),
		blogPostService = require("../service/blogPostService");    

	app.get("/ajax/blog/", function(req, res) {
        if (!req.session.admin) {
            blogPostService.getAllPublished(function(posts) {
                res.render("blog", {
                    posts: posts,
                    admin: req.session.admin
                });
            });
        } else {
            blogPostService.getAll(function(posts) {
                res.render("blog", {
                    posts: posts,
                    admin: req.session.admin
                });
            });
        }
    });

    app.get("/ajax/blog/create/", function(req, res) {
        blogPostService.createBlogPost(function(result) {
            if (result) {
                res.json({
                    redirect: app.locals.createBlogUri(result.blogPost.id, result.content.heading)
                });
            } else {
                res.json(false);
            }
        });
    });
    
    app.get("/ajax/blog/post/", function(req, res) {
    	res.render("blog-post", {
    		admin: req.session.admin
    	});
    });
    
    app.get("/ajax/blog/post/:id/:slug/", function(req, res) {
        var id = req.params.id;
        blogPostService.getBlogPost(id, function(post) {	
            post = app.locals.getBlogPostContent(post, req.session.admin);

            if (post) {
                var postSlug = stringUtil.sluggify(post.heading);

                if (postSlug != req.params.slug) {
                    res.json({changeSlug: postSlug});
                } else {
                    res.render("postcontent", {
                        "post": post
                    });
                }        
            } else {
                res.send(404, "The blog post is not published or does not exist.");
            }
        });
    });

    app.post("/ajax/blog/publish/", function(req, res) {
        if (req.session.admin) {
            blogPostService.publish(req.body._id, function(result) {
                res.json({success: result});
            });
        }
    });

    app.post("/ajax/blog/unpublish/", function(req, res) {
        if (req.session.admin) {
            blogPostService.unpublish(req.body._id, function(result) {
                res.json({success: result});
            });
        }
    });
    
    app.post("/ajax/blog/remove/", function(req, res) {
        if (req.session.admin) {
            blogPostService.remove(req.body._id, function(result) {
                res.json({success: result});
            });
        }
    });

    app.post("/ajax/blog/save/", function(req, res) {
        if (req.session.admin) {
            blogPostService.save(req.body, function(result) {
                if (result) {
                    res.json(200, {
                        success: true,
                        id: result.id
                    });
                } else {
                    res.json({success: false});
                }
            });
        }
    });

    app.post("/ajax/blog/convert-markdown/", function(req, res) {
        if (req.body.markdown) {
            res.send(stringUtil.markdown(req.body.markdown));
        } else {
            res.send("");
        }
    });

    app.get("/ajax/blog/right-column/", function(req, res) {
        blogPostService.getAllPublished(function(posts) {
            res.render("right-col", {
                posts: posts
            });
        });
    });
};

module.exports = init;