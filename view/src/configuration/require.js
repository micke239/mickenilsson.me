(function() {
    "use strict";
    
    require.config({
        paths: {
		    "jquery": "lib/jquery-1.7.2.min",
            "angular": "lib/angular-1.0.1.min"
        },
        shim : {
 	        "jquery": {
               exports: "jQuery"
 	        },
 	        "angular": {
 	            exports: "angular",
 	            deps: ["jquery"]
 	        }
 	    }
    });
}());