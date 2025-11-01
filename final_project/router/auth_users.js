const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();
const usersData = require('../data/user.data.js')


const isValid = (username)=>{ 
  //write code to check is the username is valid
  return (usersData.findUserIndex(username) >= 0);
}

const authenticatedUser = (username,password)=>{ 
  const user = usersData.getUser(username);
  const { username: storedUsername, password: storedPassword} = user;
  return (user && (storedUsername === username) && (storedPassword === password));
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = usersData.users;
