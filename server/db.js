const path = require('path');

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/sws.sqlite3')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
});

// Just for debugging purposes:
// Log all data in "swsCompany" table
knex.select('*').from('swsCompany')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err));

// Export the database
module.exports = knex