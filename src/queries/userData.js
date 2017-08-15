'use strict'

const dbConnection = require('../database/db_connection');

const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  bcrypt.hash(password, 10, callback);

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
  const {
    username,
    password,
    name,
    surname,
    email
  } = userInfo;

  const hashedPassword = hashPassword(password, (err, response) => {
    if (err) {
      return console.log(err);
    }
    console.log(response);
    return response;
  })

  const insertUser = "INSERT INTO users ( username, password, name, surname, email) VALUES ($1,$2, $3, $4, $5)"
  const post = [username, hashedPassword, name, surname, email];
  dbConnection.query(insertUser, post, (err, response) => {
    if (err) {
      return callback(err);

    }
    console.log('new user added!');
    callback(null, response);
  })

}


const validateLogin = (loginInfo, callback) => {
  //comparePasswords
}

module.exports = {
  hashPassword,
  validateLogin,
  createUser

};
