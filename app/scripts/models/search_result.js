define (
	['jquery',
	'underscore',
	'backbone'],
function ($, _, Backbone) {
	"use strict";
	
	var SearchResult = Backbone.Model.extend({
		title: 'title not assigned',
		url: 'url not assigned'
	});	
	
	return SearchResult;
});
