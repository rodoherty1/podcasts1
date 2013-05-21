define([
	'jquery',
	'underscore',
	'backbone',
	'collections/users'
	],
function($, _, Backbone, Users) {
	"use strict";
	
	var UserListView = Backbone.View.extend({
		el: '.page',
		render: function() {
			var that = this;
			var users = new Users();
			users.fetch({
				success: function(users) {
					var template = _.template;
					that.$el.html('!Content should show here!');
				}	
			});
			
		}
	});
		
	return UserListView;
});