define (['backbone'], function (Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home'
		}
	});
	
	var router = new Router();
	router.on('route:home', function() {
		console.log ('We have loaded the home page!');
	});
	
	Backbone.history.start();

	return Router;
});