const users = [{
    username: 'user1@books.com',
    password: 'userpw',
}];

const getUser = (username) => {
    const user = users.find((user) => (user.username === username));
    return user;
}

const findUserIndex = (username) => {
    const userIndex = users.findIndex((user) => (user.username === username));
    return userIndex;
}

const addUser = (user, replace = false) => {
   let userIndex = findUserIndex(user.username);
   if (userIndex >= 0) {
     if (replace) {
        users[userIndex] = user;
     } else {
        userIndex = -1;
     }
  } else {
    userIndex = users.length;
    users.concat(user);
  }
  return userIndex;
}
module.exports.users = users;
module.exports.getUser = getUser;
module.exports.findUserIndex = findUserIndex;
module.exports.addUser = addUser;
