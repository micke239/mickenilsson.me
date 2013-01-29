var StringUtil = function() {
	var ghm = require("ghm");

   	this.sluggify = function(text) {
        return text.trim().toLowerCase().
                            replace(/\s/g, "-").
                            replace(/[åä]/g, "a").
                            replace(/[ö]/g,"o").
                            replace(/[^a-z0-9-]/g, "").
                            replace(/-+/g, "-");
    };

    this.markdown = function(markdown) {
    	return ghm.parse(markdown);
    };
};

module.exports = new StringUtil();