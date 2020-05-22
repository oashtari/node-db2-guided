// Update with your config settings.

// npm i -g knex to install it globally

// KNEX NOTES
// 1. knex init, that's what creates this file
// structure of this file: exporting an object that has a few keys
// 2. change the development key to hold the same values we created in the connections.js file
// 3. connections file needs to get this export
// 4. inside connections import this file
// 5. just assign knexfile.development to a variable that is assigned to knexConfig
// 6. run this in command line knex migrate:make filename


// 7. do migrations creation, but then change the db to 'market' instead of 'produce'
// we will create a 'market' db next 
// 8. run knex migrate:latest and it will automatically create a new db called market.db3 inside 'data'
// this is for Sqlite3 only...for Postgrest, must create a new table first
// every change 
// 9. can do new migration with knex migrate:make name
// 10. all schema change should be done with migrations

module.exports = {

  development: {
    client: 'sqlite3', // db driver
    connection: {
      filename: './data/market.db3' // path is from root, not from file we're in, so only one dot/. is needed
    }, // could be an object or a string
    useNullAsDefault: true, // only needed for SQLite
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
