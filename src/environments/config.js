"use strict";

// $lab:coverage:off$

let environment = (process.env.NODE_ENV || 'developer').toLowerCase();
let defaultConfig;

try {
    defaultConfig = require('./' + environment);
}
catch(e) {
    defaultConfig = require('./dev');
}

let config = {
    pg: defaultConfig.pg,
    newrelic: {
        key: process.env.NEW_RELIC_LICENSE_KEY || defaultConfig.newrelic.key,
        project: defaultConfig.newrelic.project
    },
    server: {
        host: "0.0.0.0",
        port: "3000" 
    },
};

module.exports = config;

// $lab:coverage:on$
