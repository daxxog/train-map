/* TrainMap
 * high level database for Ticket to Ride
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.TrainMap = factory();
  }
}(this, function() {
    var TrainRoute = require('train-route'),
        TrainDestination = require('train-destination'),
        TrainMap;
    
    TrainMap = function() {
        this.routes = [];
        this.destinations = {};

        this.clean();
    };

    TrainMap.prototype.clean = function() {
        this.smart = {
            destination: {
                name: {
                    by: {
                        id: {}
                    }
                }
            }
        };

        return this;
    };

    TrainMap.prototype.build = function() {
        var k;

        this.clean();

        for(k in this.destinations) {
            this.smart.destination.name.by.id[this.destinations[k]._id] = k;
        }

        return this;
    };

    TrainMap.prototype.destination = function(name, _nobuild) {
        if(typeof this.destinations[name] === 'undefined') {
            this.destinations[name] = new TrainDestination(name);
        }

        if(_nobuild !== true) {
            this.build();
        }

        return this;
    };

    TrainMap.prototype.route = function(a, b, cars, _nobuild) {
        this.destination(a, true).destination(b, true).routes.push(new TrainRoute(this.destinations[a], this.destinations[b], cars));

        if(_nobuild !== true) {
            this.build();
        }

        return this;
    };

    TrainMap.prototype.import = function(obj) {
        var that = this;

        obj.forEach(function(route) {
            that.route(route.a, route.b, route.cars, true);
        });

        this.build();

        return this;
    };

    TrainMap.prototype.export = function() {
        var byid = this.smart.destination.name.by.id;

        return this.routes.map(function(v) {
            return {
                a: byid[v.a],
                b: byid[v.b],
                cars: v.cars
            };
        });
    };

    return TrainMap;
}));
