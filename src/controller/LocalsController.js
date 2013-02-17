var init = function(app) {
	"use strict";

	var stringUtil = require("../util/stringUtil"),
    	months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
    	days = ["st", "nd", "rd", "th"];

    app.locals.formatDate = function(date) {
        var twoDigits = function(d) {
            return (0 <= d && d < 10) ? "0" + d.toString() : d.toString();
        }

        return months[date.getMonth()] + " " + 
                date.getDate() + days[date.getDate() > 3 ? 3 : date.getDate()-1] + " " + 
                date.getFullYear() + ", " +
                twoDigits(date.getHours()) + ":" + twoDigits(date.getMinutes());
    };

    app.locals.markdown = function(md) {
        return stringUtil.markdown(md);
    };

    app.locals.createBlogUri = function(id, heading) {
        return "/blog/" + id + "/" + stringUtil.sluggify(heading) + "/";
    };
    
    app.locals.getBlogPostContent = function(post, admin) {
        if (post) {
			if (!admin && post.live) {
				post.live.created = post.created;
                return post.live;	
			} else if (admin) {
				if (post.preview) {
                    post.preview.preview = true; //notify that this is a preview
                    post.preview.created = post.created;
                    return post.preview;
                } else {
                    post.live.created = post.created;
                    return post.live;
                }
            }
        }

        return undefined;
    }
};

module.exports = init;