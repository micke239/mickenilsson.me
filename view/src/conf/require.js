var require = (function() {
	"use strict";
	
	return {
		deps: [
			"/src/lib/jquery-1.7.2.min.js",
			"/src/lib/angular-1.0.1.min.js"
		],
		paths: {
			"jquery": "/src/lib/jquery-module",
			"angular": "/src/lib/angular-module"
		},
		baseUrl: "/src"
	};
})();
