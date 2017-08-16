'use strict'

const dbConnection = require('../database/db_connection');

const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  bcrypt.hash(password, 10, (err, response) => {
    // handle error
    callback(null, response)
  });
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashPassword, (err, response) => {
    if (err) {
      return callback(err);
    }
    callback(err, response)
  });
}

const createUser = (userInfo, callback) => {
  const insertUser = "INSERT INTO users ( username, password, name, surname, email) VALUES ($1,$2, $3, $4, $5)"
  const {
    username,
    password,
    name,
    surname,
    email
  } = userInfo;

  let hashedPassword = '';
  hashPassword(password, (err, response) => {
    if (err) {
      return console.log(err);
    }
    hashedPassword = response;
    const queryArray = [username, hashedPassword, name, surname, email];
    dbConnection.query(insertUser, queryArray, (err, response) => {
      if (err) {
        return callback(err);
      }
      console.log('new user added!');
      callback(null, response);
    })
  })
}

// fix this function so it handles errors such as incorrect username
const validateLogin = (loginInfo, callback) => {
  const {
    username,
    password
  } = loginInfo;
  // get from the database
  const fetchPasswordQuery = 'SELECT password FROM users WHERE username = $1';
  const queryArray = [username];
  // compare the passwords
  dbConnection.query(fetchPasswordQuery, queryArray, (err, response) => {
    if (err) {
      return callback(err) // err from username not existing
    } else {
      const userHashedPassword = response.rows[0].password;
      bcrypt.compare(password, userHashedPassword, (err, response) => {
        if (err) {
          return callback('incorrect password'); //err is passwords dont match
        }
        console.log('user exists');
        callback(null, response)
      });
    }
  })
}

module.exports = {
  validateLogin,
  createUser
};
