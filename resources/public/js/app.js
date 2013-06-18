angular.module('grid', [])
    .controller('GridC', ['$scope', '$http', '$location', function (scope, http, loc) {

	scope.hosts = [];
	scope.services = [];
	scope.events = {};

	
	console.log(loc.path());
	if (loc.path() != '/' && loc.path() != '') {
	    scope.query = atob(loc.path().substr(1));
	} else {
	    scope.query = 'host="gv1m-vl-vis-graph01"';
	}

	scope.get_states = function() {
	    http.post('/api/states', {q: scope.query})
		.success(function (data) {
		    scope.hosts = data.hosts;
		    scope.services = data.services;
		    scope.events = data.events;
		});
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
