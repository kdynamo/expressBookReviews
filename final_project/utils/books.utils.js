const books = require('../router/booksdb');

const getBookByIsbn = (isbn) => {
      const found = Object.keys(books).find((index) => (books[index].isbn === isbn));
      const book = (found  >= 0) ? books[found] : undefined;
      return book;
}

const getBooksByAuthor = (author) => {
      const authoredBooks = Object.keys(books)
        .filter((index) => (books[index].title === title))
        .map((bookIndex) => (books[bookIndex]));
      return authoredBooks;
};

const getBookByTitle = (title) => {
      const titleIndex = Object.keys(books)
        .find((index) => (books[index].title === title));
       const titleBook = titleIndex ? books[titleIndex] : undefined;
     return titleBook;
};
module.exports.getBookByIsbn = getBookByIsbn;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBookByTitle = getBookByTitle;