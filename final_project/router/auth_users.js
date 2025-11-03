const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();
const usersData = require('../data/user.data.js')
const LOGIN_EXPIRES = 60;

const isValid = (username)=>{ 
  //write code to check is the username is valid
  return (usersData.findUserIndex(username) >= 0);
}

const authenticatedUser = (username,password)=>{ 
  const user = usersData.getUser(username);
  const { username: storedUsername, password: storedPassword} = user;
  return (user && (storedUsername === username) && (storedPassword === password));
}

const getAccessToken = (username) => {
  const accessToken = jwt.sign({
    data: username,
  }, 'access', { expiresIn: (60 * LOGIN_EXPIRES)})
};
//only registered users can login
regd_users.post("/login", (req,res) => {
  const {
    username = '',
    password = '',
  } = req.body;

  if ((username === '')  || (password === '')) {
      return res.status(404).json({ message: 'Both username and password must be provided'});
  }
  if (authenticatedUser(username, password)) {
    const accessToken = getAccessToken(username);
    req.session.authorization = {
      accessToken,
    };
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(404).json({ message: 'Username and/or password does not match'})
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = usersData.users;
