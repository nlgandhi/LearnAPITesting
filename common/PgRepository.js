'use strict';
const pg = require('pg');
pg.defaults.poolSize = 100;
const { types } = require('pg');
const logger = require('../logger').getLogger(__filename);


// Fix for parsing of numeric fields
types.setTypeParser(1700, 'text', parseFloat);

class PgRepository {

    constructor(context) {
        const {connection, Logging, newrelic} = context;
        this.connection = connection;   
        this.logging = Logging;
        this.newrelic = newrelic;
        this.pgPool = new pg.Pool(this.connection);
        this.queryCount = 0;
    }

    async query(sql) {
        let client;
        try {
            client = await this.pgPool.connect();
            return await client.query(sql);
        }
        catch(error) {
            logger.error(error);
            throw error;
        }
        finally {
            if(client) {
                // reset connection approx every 20000th query (10000 req ~ 20s)
                if((this.queryCount+1) % 20000 === 0) {
                    this.queryCount = 0 ;
                    const RemoveFromPool = true;
                    await client.release(RemoveFromPool);
                } else  {
                    this.queryCount++;
                    await client.release();
                }
            }
        }
    }
    
    getPostgresConnectionString() {
        const {host, database, user, password} = this.connection;
        return `postgres://${user}:${password}@${host}/${database}`;
    }

    getQueryString(... args) {
        return (args[1] || []).reduce((q, a, i) => {
            const delim = typeof a === 'string' ? `'` : ``;
            return q.replace(new RegExp(`\\$${i + 1}`), `${delim}${a}${delim}`);
        }, (args[0] || ''));
    }
}

module.exports = PgRepository;
