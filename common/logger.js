"use strict";

const bunyan = require('bunyan');
const moment = require('moment');
const { packageVersion } = require('../../package.json');

function getLogger(file) {
    return bunyan.createLogger({
        id: `${moment().format("YYYYMMDD-HHmmss")}`,
        name: 'local gstat api',
        version: packageVersion,
        file
    });
}

module.exports = {
    getLogger
};
