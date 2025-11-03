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
   let message = '';
   let addCode = 0;
   const {
      username = '',
      password = '',
    } = user;
   if ((username === '') || (password === '')) {
     message = 'Username and Password must be provided';
     code = 101;
   } else {
    let userIndex = findUserIndex(username);
    if (userIndex >= 0) {
      if (replace) {
          users[userIndex] = user;
          message = `User: ${username} replaced`;
          code = 1;
      } else {
          userIndex = -1;
          message = `User: ${username} already exists`;
          code = 100;
      }
    } else {
      userIndex = users.length;
      users.concat(user);
      message = `User: ${username} added`;
      code = 0;
    }
  }
  return {
    message,
    code 
  }
}
module.exports.users = users;
module.exports.getUser = getUser;
module.exports.findUserIndex = findUserIndex;
module.exports.addUser = addUser;
