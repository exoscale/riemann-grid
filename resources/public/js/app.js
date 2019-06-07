angular.module('grid', ['ui.bootstrap.tooltip', 'ui.bootstrap.tpls'])
    .config(['$routeProvider', function(route) {
	route
	    .when('/host/:host',
		 {templateUrl: '/tpl/host.html',
		  controller: 'GridC'})
	    .when('/query/:query',
		  {templateUrl: '/tpl/grid.html',
		   controller: 'GridC'})
	    .otherwise({redirectTo: '/query/' + btoa('state != "ok" and not tagged "maintenance"')});
    }])
    .controller('GridC', ['$scope', '$http', '$routeParams', function (scope, http, params) {

	var saved_date = null;

	scope.hosts = [];
	scope.services = [];
	scope.events = {};

	if (params.host) {
	    scope.host = params.host;
	    scope.query = 'host = "' + params.host + '"';
	    scope.saved_query = 'host = "' + params.host + '"';
	} else if (params.query) {
	    var query = atob(params.query);
	    scope.query = query;
	    scope.saved_query = query;
	} else {
	    scope.query = 'state != "ok"';
	    scope.saved_query = 'state != "ok"';
	}
	
	scope.get_states = function() {
	    http.post('/api/states', {q: scope.saved_query})
		.success(function (data) {
		    saved_date = new Date();
		    scope.hosts = data.hosts;
		    scope.services = data.services;
		    scope.events = data.events;
		});
	};

	scope.update_query = function() {
	    scope.saved_query = scope.query;
	    scope.get_states();
	};

	scope.query_url = function() {
	    return btoa(scope.query);
	};

	scope.event_state = function(host, service) {
	    if (scope.events[host] && scope.events[host][service]) {
		switch (scope.events[host][service].state) {
		case 'ok':
		    return 'btn-success';
		case 'warning':
		    return 'btn-warning';
		case 'critical':
		    return 'btn-danger';
		default:
		    return '';
		}
	    }
	};

	scope.event_metric = function(host, service) {
	    if (scope.events[host] && scope.events[host][service]) {
		return scope.events[host][service].metric;
	    }
	};

	scope.get_states();

	var update_last_run = function() {
	    if (!saved_date) {
		scope.timestamp = "never";
	    } else {
		scope.timestamp = moment(saved_date).fromNow();
	    }
	}
	scope.timestamp = "never";
	setInterval(update_last_run, 500);
	setInterval(scope.get_states, 10000);
    }]);
