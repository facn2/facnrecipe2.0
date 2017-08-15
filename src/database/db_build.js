const fs = require('fs');
const dbconnection = require('./db_connection');
const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbconnection.query(buildScript, (err, res) => {
  if (err) throw err;
  console.log("Database created successfully: ", res);
});
