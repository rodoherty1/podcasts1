define (
	['jquery',
	'underscore',
	'backbone'],
function ($, _, Backbone) {
	"use strict";
	
	var Users = Backbone.Collection.extend({
		url: '/users'
	});	
	
	return Users;
});
