(function() {
    "use strict";
    
    require.config({
        paths: {
		    "jquery": "lib/jquery",
            "angular": "lib/angular",
            "bootstrap": "lib/bootstrap"
        },
        shim : {
 	        "jquery": {
               exports: "jQuery"
 	        },
 	        "angular": {
 	            exports: "angular",
 	            deps: ["jquery"]
 	        },
 	        "bootstrap": {
 	            deps: ["jquery"],
 	            exports: "jQuery"
 	        }
 	    }
    });
}());