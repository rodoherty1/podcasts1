define(['backbone', 'views/userlist'], function(Backbone, UserListView) {
	"use strict";

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'home'
		}
	});

	var initialize = function() {
			var appRouter = new AppRouter();

			appRouter.on('route:home', function() {
				console.log('We have loaded the home page!');
				var userListView = new UserListView();
				userListView.render();
			});

			Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});