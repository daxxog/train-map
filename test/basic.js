/* TrainMap / test / basic.js
 * basic test
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    TrainMap = require('../train-map.min.js'),
    data, destinations, dsmart;

data = [
	{
		"a": "VANCOUVER",
		"b": "SEATTLE",
		"cars": 1
	},
	{
		"a": "VANCOUVER",
		"b": "SEATTLE",
		"cars": 1
	},
	{
		"a": "VANCOUVER",
		"b": "CALGARY",
		"cars": 3
	},
	{
		"a": "SEATTLE",
		"b": "CALGARY",
		"cars": 4
	},
	{
		"a": "SEATTLE",
		"b": "PORTLAND",
		"cars": 1
	},
	{
		"a": "SEATTLE",
		"b": "PORTLAND",
		"cars": 1
	},
	{
		"a": "CALGARY",
		"b": "HELENA",
		"cars": 4
	},
	{
		"a": "HELENA",
		"b": "SEATTLE",
		"cars": 6
	},
	{
		"a": "HELENA",
		"b": "SALT LAKE CITY",
		"cars": 3
	},
	{
		"a": "SALT LAKE CITY",
		"b": "PORTLAND",
		"cars": 6
	},
	{
		"a": "HELENA",
		"b": "DENVER",
		"cars": 4
	},
	{
		"a": "HELENA",
		"b": "OMAHA",
		"cars": 5
	},
	{
		"a": "HELENA",
		"b": "DULUTH",
		"cars": 6
	},
	{
		"a": "HELENA",
		"b": "WINNIPEG",
		"cars": 4
	},
	{
		"a": "SALT LAKE CITY",
		"b": "DENVER",
		"cars": 3
	},
	{
		"a": "SALT LAKE CITY",
		"b": "DENVER",
		"cars": 3
	},
	{
		"a": "SALT LAKE CITY",
		"b": "LAS VEGAS",
		"cars": 3
	},
	{
		"a": "SALT LAKE CITY",
		"b": "SAN FRANCISCO",
		"cars": 5
	},
	{
		"a": "SALT LAKE CITY",
		"b": "SAN FRANCISCO",
		"cars": 5
	},
	{
		"a": "SAN FRANCISCO",
		"b": "LOS ANGELES",
		"cars": 3
	},
	{
		"a": "SAN FRANCISCO",
		"b": "LOS ANGELES",
		"cars": 3
	},
	{
		"a": "LOS ANGELES",
		"b": "PHOENIX",
		"cars": 3
	},
	{
		"a": "LOS ANGELES",
		"b": "EL PASO",
		"cars": 6
	},
	{
		"a": "EL PASO",
		"b": "PHOENIX",
		"cars": 3
	},
	{
		"a": "EL PASO",
		"b": "SANTA FE",
		"cars": 2
	},
	{
		"a": "EL PASO",
		"b": "OKLAHOMA CITY",
		"cars": 5
	},
	{
		"a": "EL PASO",
		"b": "DALLAS",
		"cars": 4
	},
	{
		"a": "EL PASO",
		"b": "HOUSTON",
		"cars": 6
	},
	{
		"a": "HOUSTON",
		"b": "DALLAS",
		"cars": 1
	},
	{
		"a": "HOUSTON",
		"b": "DALLAS",
		"cars": 1
	},
	{
		"a": "DALLAS",
		"b": "OKLAHOMA CITY",
		"cars": 2
	},
	{
		"a": "DALLAS",
		"b": "OKLAHOMA CITY",
		"cars": 2
	},
	{
		"a": "DALLAS",
		"b": "LITTLE ROCK",
		"cars": 2
	},
	{
		"a": "LITTLE ROCK",
		"b": "OKLAHOMA CITY",
		"cars": 2
	},
	{
		"a": "LITTLE ROCK",
		"b": "SAINT LOUIS",
		"cars": 2
	},
	{
		"a": "LITTLE ROCK",
		"b": "NASHVILLE",
		"cars": 3
	},
	{
		"a": "LITTLE ROCK",
		"b": "NEW ORLEANS",
		"cars": 3
	},
	{
		"a": "OKLAHOMA CITY",
		"b": "SANTA FE",
		"cars": 3
	},
	{
		"a": "OKLAHOMA CITY",
		"b": "DENVER",
		"cars": 4
	},
	{
		"a": "OKLAHOMA CITY",
		"b": "KANSAS CITY",
		"cars": 2
	},
	{
		"a": "OKLAHOMA CITY",
		"b": "KANSAS CITY",
		"cars": 2
	},
	{
		"a": "DENVER",
		"b": "PHOENIX",
		"cars": 5
	},
	{
		"a": "DENVER",
		"b": "SANTA FE",
		"cars": 2
	},
	{
		"a": "DENVER",
		"b": "OMAHA",
		"cars": 4
	},
	{
		"a": "DENVER",
		"b": "KANSAS CITY",
		"cars": 4
	},
	{
		"a": "DENVER",
		"b": "KANSAS CITY",
		"cars": 4
	},
	{
		"a": "LAS VEGAS",
		"b": "LOS ANGELES",
		"cars": 2
	},
	{
		"a": "SAN FRANCISCO",
		"b": "PORTLAND",
		"cars": 5
	},
	{
		"a": "SAN FRANCISCO",
		"b": "PORTLAND",
		"cars": 5
	},
	{
		"a": "CALGARY",
		"b": "WINNIPEG",
		"cars": 6
	},
	{
		"a": "WINNIPEG",
		"b": "DULUTH",
		"cars": 4
	},
	{
		"a": "WINNIPEG",
		"b": "SAULT ST MARIE",
		"cars": 6
	},
	{
		"a": "SAULT ST MARIE",
		"b": "DULUTH",
		"cars": 3
	},
	{
		"a": "DULUTH",
		"b": "OMAHA",
		"cars": 2
	},
	{
		"a": "DULUTH",
		"b": "OMAHA",
		"cars": 2
	},
	{
		"a": "OMAHA",
		"b": "KANSAS CITY",
		"cars": 1
	},
	{
		"a": "OMAHA",
		"b": "KANSAS CITY",
		"cars": 1
	},
	{
		"a": "OMAHA",
		"b": "CHICAGO",
		"cars": 4
	},
	{
		"a": "CHICAGO",
		"b": "DULUTH",
		"cars": 3
	},
	{
		"a": "DULUTH",
		"b": "TORONTO",
		"cars": 6
	},
	{
		"a": "KANSAS CITY",
		"b": "SAINT LOUIS",
		"cars": 2
	},
	{
		"a": "KANSAS CITY",
		"b": "SAINT LOUIS",
		"cars": 2
	},
	{
		"a": "SAINT LOUIS",
		"b": "NASHVILLE",
		"cars": 2
	},
	{
		"a": "NASHVILLE",
		"b": "ATLANTA",
		"cars": 1
	},
	{
		"a": "NASHVILLE",
		"b": "RALEIGH",
		"cars": 3
	},
	{
		"a": "NASHVILLE",
		"b": "PITTSBURGH",
		"cars": 4
	},
	{
		"a": "SAINT LOUIS",
		"b": "CHICAGO",
		"cars": 2
	},
	{
		"a": "SAINT LOUIS",
		"b": "CHICAGO",
		"cars": 2
	},
	{
		"a": "SANTA FE",
		"b": "PHOENIX",
		"cars": 3
	},
	{
		"a": "HOUSTON",
		"b": "NEW ORLEANS",
		"cars": 2
	},
	{
		"a": "TORONTO",
		"b": "CHICAGO",
		"cars": 4
	},
	{
		"a": "SAINT LOUIS",
		"b": "PITTSBURGH",
		"cars": 5
	},
	{
		"a": "CHICAGO",
		"b": "PITTSBURGH",
		"cars": 3
	},
	{
		"a": "CHICAGO",
		"b": "PITTSBURGH",
		"cars": 3
	},
	{
		"a": "TORONTO",
		"b": "PITTSBURGH",
		"cars": 2
	},
	{
		"a": "TORONTO",
		"b": "SAULT ST MARIE",
		"cars": 2
	},
	{
		"a": "MONTREAL",
		"b": "SAULT ST MARIE",
		"cars": 5
	},
	{
		"a": "MONTREAL",
		"b": "TORONTO",
		"cars": 3
	},
	{
		"a": "MONTREAL",
		"b": "NEW YORK",
		"cars": 3
	},
	{
		"a": "MONTREAL",
		"b": "BOSTON",
		"cars": 2
	},
	{
		"a": "MONTREAL",
		"b": "BOSTON",
		"cars": 2
	},
	{
		"a": "NEW YORK",
		"b": "BOSTON",
		"cars": 2
	},
	{
		"a": "NEW YORK",
		"b": "BOSTON",
		"cars": 2
	},
	{
		"a": "NEW YORK",
		"b": "PITTSBURGH",
		"cars": 2
	},
	{
		"a": "NEW YORK",
		"b": "PITTSBURGH",
		"cars": 2
	},
	{
		"a": "NEW YORK",
		"b": "WASHINGTON",
		"cars": 2
	},
	{
		"a": "NEW YORK",
		"b": "WASHINGTON",
		"cars": 2
	},
	{
		"a": "PITTSBURGH",
		"b": "WASHINGTON",
		"cars": 2
	},
	{
		"a": "PITTSBURGH",
		"b": "RALEIGH",
		"cars": 2
	},
	{
		"a": "WASHINGTON",
		"b": "RALEIGH",
		"cars": 2
	},
	{
		"a": "WASHINGTON",
		"b": "RALEIGH",
		"cars": 2
	},
	{
		"a": "RALEIGH",
		"b": "ATLANTA",
		"cars": 2
	},
	{
		"a": "RALEIGH",
		"b": "ATLANTA",
		"cars": 2
	},
	{
		"a": "ATLANTA",
		"b": "NASHVILLE",
		"cars": 1
	},
	{
		"a": "ATLANTA",
		"b": "CHARLESTON",
		"cars": 2
	},
	{
		"a": "CHARLESTON",
		"b": "RALEIGH",
		"cars": 2
	},
	{
		"a": "NEW ORLEANS",
		"b": "ATLANTA",
		"cars": 4
	},
	{
		"a": "NEW ORLEANS",
		"b": "ATLANTA",
		"cars": 4
	},
	{
		"a": "CHARLESTON",
		"b": "MIAMI",
		"cars": 4
	},
	{
		"a": "ATLANTA",
		"b": "MIAMI",
		"cars": 5
	},
	{
		"a": "NEW ORLEANS",
		"b": "MIAMI",
		"cars": 6
	}
];

destinations = [
	'VANCOUVER',
	'SEATTLE',
	'CALGARY',
	'PORTLAND',
	'HELENA',
	'SALT LAKE CITY',
	'DENVER',
	'OMAHA',
	'DULUTH',
	'WINNIPEG',
	'LAS VEGAS',
	'SAN FRANCISCO',
	'LOS ANGELES',
	'PHOENIX',
	'EL PASO',
	'SANTA FE',
	'OKLAHOMA CITY',
	'DALLAS',
	'HOUSTON',
	'LITTLE ROCK',
	'SAINT LOUIS',
	'NASHVILLE',
	'NEW ORLEANS',
	'KANSAS CITY',
	'SAULT ST MARIE',
	'CHICAGO',
	'TORONTO',
	'ATLANTA',
	'RALEIGH',
	'PITTSBURGH',
	'MONTREAL',
	'NEW YORK',
	'BOSTON',
	'WASHINGTON',
	'CHARLESTON',
	'MIAMI'
];

dsmart = {
    destination: {
        name: {
            by: {
                id: {}
            }
        }
    }
};

vows.describe('basic').addBatch({
    'TrainMap': {
        topic: function() {
        	return TrainMap;
        },
        'is a Function': function(TrainMap) {
            assert.strictEqual(typeof TrainMap, 'function');
        }
    },
    '(new TrainMap)': {
        topic: function() {
        	return new TrainMap();
        },
        'is an Object': function(tm) {
            assert.strictEqual(typeof tm, 'object');
        }
    },
	'(new TrainMap).routes': {
        topic: function() {
        	return (new TrainMap()).routes;
        },
        'is an Object': function(routes) {
            assert.strictEqual(typeof routes, 'object');
        },
        'is an Array': function(routes) {
        	assert.strictEqual(Array.isArray(routes), true);
        }
    },
	'(new TrainMap).destinations': {
        topic: function() {
        	return (new TrainMap()).destinations;
        },
        'is an Object': function(destinations) {
            assert.strictEqual(typeof destinations, 'object');
        }
    },
	'(new TrainMap).smart': {
        topic: function() {
        	return (new TrainMap()).smart;
        },
        'is an Object': function(smart) {
            assert.strictEqual(typeof smart, 'object');
        },
        'is default': function(smart) {
            assert.deepEqual(smart, dsmart);
        }
    },
	'(new TrainMap).clean()': {
        topic: function() {
        	var tm = new TrainMap();

        	tm.import(data);
        	tm.__test = {
        		chain: tm.clean()
        	}

        	return tm;
        },
        'is a function': function(tm) {
            assert.strictEqual(typeof tm.clean, 'function');
        },
        'does clean up .smart': function(tm) {
            assert.deepEqual(tm.smart, dsmart);
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
	'(new TrainMap).build()': {
        topic: function() {
        	var tm = new TrainMap(),
        		k;

        	tm.import(data);

        	tm.__test = {
        		destinationsFromSmart: [],
        		idsFromSmart: [],
        		chain: tm.build()
        	};

        	for(k in tm.smart.destination.name.by.id) {
        		tm.__test.idsFromSmart.push(k);
        		tm.__test.destinationsFromSmart.push(tm.smart.destination.name.by.id[k]);
        	}

        	return tm;
        },
        'is a function': function(tm) {
            assert.strictEqual(typeof tm.build, 'function');
        },
        'does build correct destination names': function(tm) {
        	assert.strictEqual(destinations.map(function(v) {
        		return tm.__test.destinationsFromSmart.indexOf(v);
        	}).reduce(function(p, c) {
        		return p || p === -1 || c === -1;
        	}), false);
        },
        'does build correct destination ids': function(tm) {
        	assert.strictEqual(destinations.map(function(v) {
        		return tm.__test.idsFromSmart.indexOf(tm.destinations[v]._id.toString());
        	}).reduce(function(p, c) {
        		return p || p === -1 || c === -1;
        	}), false);
        },
        'does build matching destination ids and names': function(tm) {
        	assert.strictEqual(destinations.map(function(v) {
        		var destination = tm.destinations[v];

        		return destination.name !== tm.smart.destination.name.by.id[destination._id.toString()];
        	}).reduce(function(p, c) {
        		return p || c;
        	}), false);
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
	'(new TrainMap).destination()': {
        topic: function() {
        	var tm = new TrainMap();

        	tm.destination('VANCOUVER');
        	
        	tm.__test = {
        		chain: tm.destination('VANCOUVER')
        	};

        	return tm;
        },
        'is a function': function(tm) {
            assert.strictEqual(typeof tm.destination, 'function');
        },
        'does add a destination': function(tm) {
        	assert.strictEqual(tm.destinations['VANCOUVER'].name, 'VANCOUVER');
        },
        'does not add a route': function(tm) {
        	assert.strictEqual(tm.routes.length, 0);
        },
        'does not add duplicates': function(tm) {
        	var i = 0,
        		k;

        	for(k in tm.destinations) {
        		i++;
        	}

        	assert.strictEqual(i, 1);
        },
        'does build': function(tm) {
        	var k;

        	assert.notDeepEqual(tm.smart, dsmart);

        	for(k in tm.smart.destination.name.by.id) {
        		assert.strictEqual(tm.smart.destination.name.by.id[k], 'VANCOUVER');
        	}
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
	'(new TrainMap).destination() _nobuild===true': {
        topic: function() {
        	var tm = new TrainMap();

        	tm.destination('VANCOUVER', true);
        	
        	tm.__test = {
        		chain: tm.destination('VANCOUVER', true)
        	};

        	return tm;
        },
        'does add a destination': function(tm) {
        	assert.strictEqual(tm.destinations['VANCOUVER'].name, 'VANCOUVER');
        },
        'does not add a route': function(tm) {
        	assert.strictEqual(tm.routes.length, 0);
        },
        'does not add duplicates': function(tm) {
        	var i = 0,
        		k;

        	for(k in tm.destinations) {
        		i++;
        	}

        	assert.strictEqual(i, 1);
        },
        'does not build': function(tm) {
            assert.deepEqual(tm.smart, dsmart);
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
	'(new TrainMap).route()': {
        topic: function() {
        	var tm = new TrainMap();

        	tm.route('VANCOUVER', 'SEATTLE', 1);
        	
        	tm.__test = {
        		chain: tm.route('VANCOUVER', 'SEATTLE', 1)
        	};

        	return tm;
        },
        'is a function': function(tm) {
            assert.strictEqual(typeof tm.route, 'function');
        },
        'does add destination a': function(tm) {
        	assert.strictEqual(tm.destinations['VANCOUVER'].name, 'VANCOUVER');
        },
        'does add destination b': function(tm) {
        	assert.strictEqual(tm.destinations['SEATTLE'].name, 'SEATTLE');
        },
        'does add routes': function(tm) {
        	assert.strictEqual(tm.routes.map(function(v) {
        		return !((tm.smart.destination.name.by.id[v.a] === 'VANCOUVER') && (tm.smart.destination.name.by.id[v.b] === 'SEATTLE') && (v.cars === 1));
        	}).reduce(function(p, c) {
        		return p || c;
        	}), false);
        },
        'does have ._id in routes': function(tm) {
        	assert.strictEqual(tm.routes.map(function(v) {
        		return typeof v._id !== 'object';
        	}).reduce(function(p, c) {
        		return p || c;
        	}), false);
        },
        'does make the proper number of routes': function(tm) {
        	assert.strictEqual(tm.routes.length, 2);
        },
        'does not add duplicates': function(tm) {
        	var i = 0,
        		k;

        	for(k in tm.destinations) {
        		i++;
        	}

        	assert.strictEqual(i, 2);
        },
        'does build': function(tm) {
        	var k;

        	assert.notDeepEqual(tm.smart, dsmart);

        	for(k in tm.smart.destination.name.by.id) {
        		assert.strictEqual((tm.smart.destination.name.by.id[k] === 'VANCOUVER') || (tm.smart.destination.name.by.id[k] === 'SEATTLE'), true);
        	}
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
	'(new TrainMap).route()  _nobuild===true': {
        topic: function() {
        	var tm = new TrainMap();

        	tm.route('VANCOUVER', 'SEATTLE', 1, true);
        	
        	tm.__test = {
        		chain: tm.route('VANCOUVER', 'SEATTLE', 1, true)
        	};

        	return tm;
        },
        'does add destination a': function(tm) {
        	assert.strictEqual(tm.destinations['VANCOUVER'].name, 'VANCOUVER');
        },
        'does add destination b': function(tm) {
        	assert.strictEqual(tm.destinations['SEATTLE'].name, 'SEATTLE');
        },
        'does add routes': function(tm) {
        	var _smart = tm.smart,
        		smart = tm.build().smart;

        	tm.smart = _smart;
        	
        	assert.strictEqual(tm.routes.map(function(v) {
        		return !((smart.destination.name.by.id[v.a] === 'VANCOUVER') && (smart.destination.name.by.id[v.b] === 'SEATTLE') && (v.cars === 1));
        	}).reduce(function(p, c) {
        		return p || c;
        	}), false);
        },
        'does have ._id in routes': function(tm) {
        	assert.strictEqual(tm.routes.map(function(v) {
        		return typeof v._id !== 'object';
        	}).reduce(function(p, c) {
        		return p || c;
        	}), false);
        },
        'does make the proper number of routes': function(tm) {
        	assert.strictEqual(tm.routes.length, 2);
        },
        'does not add duplicates': function(tm) {
        	var i = 0,
        		k;

        	for(k in tm.destinations) {
        		i++;
        	}

        	assert.strictEqual(i, 2);
        },
        'does not build': function(tm) {
        	assert.deepEqual(tm.smart, dsmart);
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
    '(new TrainMap).import()': {
       topic: function() {
        	var tm = new TrainMap(),
        		k;

        	tm.__test = {
        		destinationsFromSmart: [],
        		idsFromSmart: [],
        		chain: tm.import(data)
        	};

        	for(k in tm.smart.destination.name.by.id) {
        		tm.__test.idsFromSmart.push(k);
        		tm.__test.destinationsFromSmart.push(tm.smart.destination.name.by.id[k]);
        	}

        	return tm;
        },
        'is a function': function(tm) {
            assert.strictEqual(typeof tm.import, 'function');
        },
        'does build correct destination names': function(tm) {
        	assert.strictEqual(destinations.map(function(v) {
        		return tm.__test.destinationsFromSmart.indexOf(v);
        	}).reduce(function(p, c) {
        		return p || p === -1 || c === -1;
        	}), false);
        },
        'does build correct destination ids': function(tm) {
        	assert.strictEqual(destinations.map(function(v) {
        		return tm.__test.idsFromSmart.indexOf(tm.destinations[v]._id.toString());
        	}).reduce(function(p, c) {
        		return p || p === -1 || c === -1;
        	}), false);
        },
        'does build matching destination ids and names': function(tm) {
        	assert.strictEqual(destinations.map(function(v) {
        		var destination = tm.destinations[v];

        		return destination.name !== tm.smart.destination.name.by.id[destination._id.toString()];
        	}).reduce(function(p, c) {
        		return p || c;
        	}), false);
        },
        'can chain': function(tm) {
        	assert.deepEqual(tm.__test.chain, tm);
        }
    },
    '(new TrainMap).export()': {
       topic: function() {
        	var tm = new TrainMap();

        	tm.import(data);

        	tm.__test = {
        		export: tm.export()
        	};

        	return tm;
        },
        'is a function': function(tm) {
            assert.strictEqual(typeof tm.export, 'function');
        },
        'exported data equals imported data': function(tm) {
        	assert.deepEqual(tm.__test.export, data);
        }
    },
    '(new TrainMap).export() custom': {
       topic: function() {
        	var tm = new TrainMap();

        	tm.route('VANCOUVER', 'SEATTLE', 1);
        	tm.route('VANCOUVER', 'SEATTLE', 1);

        	tm.__test = {
        		export: tm.export()
        	};

        	return tm;
        },
        'does export data': function(tm) {
        	assert.deepEqual(tm.__test.export, [
        		{
        			a: 'VANCOUVER',
        			b: 'SEATTLE',
        			cars: 1
        		},
        		{
        			a: 'VANCOUVER',
        			b: 'SEATTLE',
        			cars: 1
        		}
        	]);
        }
    }
}).export(module);