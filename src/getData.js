// Add code below to query your database
const dbConnection = require('../database/db_connection');

const getData = (country, cb) => {
  const myQuery = `SELECT * FROM recipe WHERE recipe_origin = '${country}'; `;

  dbConnection.query(myQuery, (err, res) => {
    if (err)
      return cb(err);
    cb(null, res.rows);
  });
}

module.exports = getData;
