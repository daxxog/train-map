/* TrainMap / make.js
 * echo 'make script for TrainMap' && node make
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var bitfactory = require('bitfactory'),
    UglifyJS = require("uglify-js"),
    stoptime = require('stoptime'),
    fs = require('fs');

var watch = stoptime(),
    header = '';

bitfactory.make({ //routes
    "": function(err, results) {
        console.log('built TrainMap in ' + watch.elapsed() + 'ms.');
    }
}, { //dependencies
    "*": { //wildcard
        "header": function(cb) {
            fs.readFile('train-map.h', 'utf8', function(err, data) {
                header = data;
                cb(err);
            });
        },
        "train-map.min.js": ["header", function(cb) {
            fs.writeFileSync('train-map.min.js', header + UglifyJS.minify('train-map.js').code);
            cb();
        }]
    }
});