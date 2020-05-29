"use strict";

module.exports = {
    newrelic: {
        project: "local.gstat.api",
        key: "ZZZ"
    },
    pg: {
        connection: {
            host: "gstats-reader-db.geo.moveaws.com",
            port: 5432,
            user: "progres",
            password: "XXX",
            database: "gstats",
            max: 100
        },
        schema: "gstat_20191002_01",
        spatialRelationId: 4326
    }, 
    Logging: {
        Name: "local-gstat-api",
        Level: "info"
    }
};
