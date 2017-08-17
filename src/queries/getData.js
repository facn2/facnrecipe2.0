// Add code below to query your database
const dbConnection = require('../database/db_connection');

const getData = (country, cb) => {
  let myQuery = '';
  if (country.match("^Asian|Arabic|British|Italian$")) {
    myQuery = `SELECT * FROM recipe WHERE cuisine = $1; `;
    //take the cusines from that country
    dbConnection.query(myQuery, [country], (err, res) => {
      if (err)
        return cb(err);
      cb(null, [country, res.rows]);
    });

  } else if (country.match(/Latest/)) {
    myQuery = `SELECT * FROM recipe ORDER BY id DESC LIMIT 5`;
    //otherwise take only the 5 latest recipies (the bottow 5 recipes in the database) to be shown on homepage
    dbConnection.query(myQuery, (err, res) => {
      if (err)
        return cb(err);
      cb(null, [country, res.rows]);
    });
  }
}

module.exports = getData;
