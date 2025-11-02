const books = require('../router/booksdb');

const getBookByIsbn = (isbn) => {
      const found = Object.keys(books).find((index) => (books[index].isbn === isbn));
      const book = (found  >= 0) ? books[found] : undefined;
      return book;
}
module.exports.getBookByIsbn = getBookByIsbn;