require.config({
	paths: {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone"
	}
});


require([
	'app'],
function(App) {
	"use strict";
	App.initialize();
});