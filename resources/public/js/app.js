angular.module('grid', ['ui.bootstrap.tooltip', 'ui.bootstrap.tpls'])
    .controller('GridC', ['$scope', '$http', '$location', function (scope, http, loc) {

	scope.hosts = [];
	scope.services = [];
	scope.events = {};
	
	if (loc.path() != '/' && loc.path() != '') {
	    var query = atob(loc.path().substr(1));
	    scope.query = query;
	    scope.saved_query = query;
	    
	} else {
	    scope.query = 'state != "ok"';
	    scope.saved_query = 'state != "ok"';
	}

	scope.get_states = function() {
	    http.post('/api/states', {q: scope.saved_query})
		.success(function (data) {
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
	setInterval(scope.get_states, 10000);
    }])
    .filter('precision', function() {
	return function(input, p) {
            input_float = "0.00";
            if (input) {
		input_float = parseFloat(input.toString()).toFixed(p);
            }
            return input_float;
	}
    });
