// Add code below to query your database
const dbConnection = require('../database/db_connection');

const getData = cb => {
  const myQuery = 'SELECT * FROM recipe';
  dbConnection.query(myQuery, (err, res)=>{
    if(err)
      return cb(err);
    cb(null, res.rows);
  });
}

module.exports = getData;
