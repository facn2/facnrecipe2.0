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
    const post = [username, hashedPassword, name, surname, email];
    dbConnection.query(insertUser, post, (err, response) => {
      if (err) {
        return callback(err);
      }
      console.log('new user added!');
      callback(null, response);
    })
  })
}


const validateLogin = (loginInfo, callback) => {
  //comparePasswords
}

module.exports = {
  validateLogin,
  createUser
};
