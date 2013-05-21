define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router) {
	"use strict";
	
	var initialize = function() {
		Router.initialize();
		console.log ('App has been initialised!');
	};

	return {
		initialize: initialize
	};
});