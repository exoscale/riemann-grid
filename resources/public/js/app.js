var app = angular.module('grid');

app.controller('GridC', ['$scope','$q', '$http', function (scope, q, http) {
    scope.hosts = [];
    scope.services = [];
    scope.events = {};
    scope.query = "true";

    var update_states = function(states) {

	scope.services = _.chain(states).groupBy('service').keys().values();
	scope.hosts = _.chain(states).groupBy('hosts').keys().values();

	scope.events = _.chain(states)
	    .groupBy('hosts')
	    .map(function (k,v) {
		var o = {};
		o[k] = _.chain(v)
		    .groupBy('service')
		    .map(function(subk, subv) {
			var subo = {};
			subo[subk] = _.first(subv);
			return subo;
		    })
		    .reduce(function(memo, item) {
			return _.extend(memo,item);
		    }, {})
		    .value();
		return o;
	    })
	    .reduce(function(memo, item) {
		return _.extend(memo, item);
	    }, {})
	    .value();
		    
	scope.services = _.chain(states)
	    .map(function (event) { return event.service; })
	    .uniq()
	    .value();

	scope.hosts = _.chain(states)
	    .map(function (event) { return event.host; })
	    .uniq()
	    .value();

	console.log(scope.events);

    };

    var get_states = function() {
	http.post('/api/states', {q: scope.query})
	    .success(function (data) {
		update_states(data);
	    });
    };

    setInterval(get_states, 5000);
}]);
