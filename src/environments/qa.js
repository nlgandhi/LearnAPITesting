"use strict";

module.exports = {
    newrelic: {
        project: "local.gstat.api.qa",
        key: "XXX"
    },
    pg: {
        connection: {
            host: "gstats-reader-db.geo-qa.moveaws.com",
            port: 5432,
            user: "progres",
            password: "XXX",
            database: "gstats",
            max: 100
        },    
        schema: "gstat_20191002_z_13",
        spatialRelationId: 4326
    },
    Logging: {
        Name: "local-gstat-api",
        Level: "info"
    }
};
