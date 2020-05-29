"use strict";

module.exports = {
    newrelic: {
        project: "local.gstat.api.dev",
        key: "XXX"
    },
    pg: {
        connection: {
            host: "gstats-reader-db.geo-dev.moveaws.com",
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
