'use strict';

var app = app || {};
var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com';

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  //This is the function to render all of the books via the template at the top of index.html
  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-template').text());
    return template(this);
  }

  Book.all = [];

  //Loads all books
  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
  }

  //Grabs all books
  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  //Grabs one book
  Book.fetchOne = (ctx, callback) => {
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => ctx.book = results[0])
      .then(callback)
      .catch(errorCallback);
  }

  //This receives the book object from the function on book-view.js.
  Book.createBook = book =>
    $.post(`${__API_URL__}/api/v1/books`, book)
      .then(() => page('/'))
      .catch(errorCallback);

  //Deletes a single book
  Book.deleteBook = (ctx) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${ctx.book_id}`,
      method: 'DELETE'
    })
      .then(console.log)
      .then(() => page('/'));
  };

  // //This updates a book
  Book.updateBook = (ctx, book) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/books`,
      method: 'PUT',
      data: {
        book_id: book.book_id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        image_url: book.image_url,
        description: book.description
      }
    })
      .then(() => page('/'));
  }

  module.Book = Book;
})(app)