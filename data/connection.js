//bring in knex
const knex = require('knex');

// this import happens after creating a knex file with knex init
const knexfile = require('../knexfile');

// configured a connection to the database
// call knex as a function, pass it a configuration object
// the object is the key
// knex works in tandem with a driver, that client is the driver
// knex's job, translate between our language and SQL
// driver can be sqlite3, or PG for postgres
// the connection is pointing to a particular file


// ORIGINAL VERSION:
// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });


// FROM SCRATCH:
// 1. bring in knex
// 2. create object (knexConfig below), which has 1. client, 2. connection, 3. useNullAsDefault (only for sqlite)
// 3. const db to call knex

// const knexConfig = {
//     client: 'sqlite3', // db driver
//     connection: {
//         filename: './data/produce.db3' // path is from root, not from file we're in, so only one dot/. is needed
//     }, // could be an object or a string
//     useNullAsDefault: true, // only needed for SQLite
// }
//new version of knexConfig, above is the from scratch version

// LESSON VERSION
// const knexConfig = knexfile.development;

// QUESTION/MORE COMPLEXT but for deploy version:
const environment = process.env.DB_ENV || 'development'; // .NODE_ENV is another option
const knexConfig = knexfile[environment];

// db represents a live connection to the database
// const db = knex(knexConfig);
// dump that line above, and just export it directly as below

module.exports = knex(knexConfig);