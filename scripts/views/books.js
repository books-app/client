'use strict';

var app = app || {};


(function(module) {
  
  var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com';
  
  function Book(bookObject) {
    Object.keys(bookObject).forEach( key => this[key] = bookObject[key]);
  }

  //This is the function to render all of the books 
  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#all-books').text());
    return template(this);
  }

  Book.all = [];

  //Grabs all books
  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/books`)
      .then(Book.loadAll)
      .then(callback);
  //Grabs one book
  Book.fetchOne = (ctx, callback) => {
    $.get(`${__API_URL__}/books/${ctx.params.id}`)
      .then(results => ctx.book = results[0])
      .then(callback);
  }

  //This receives the book object from the function on book-view.js.
  Book.createBook = book =>
    $.post(`${__API_URL__}/books`, book)
      .then(() => page('/'));

  //Deletes a single book
  Book.deleteBook = (ctx) => {
    $.ajax({
      url: `${__API_URL__}/books/${ctx.id}`,
      method: 'DELETE'
    })
      .then(console.log('200'))
      .then(() => page('/'));
  };

  // //This updates a book
  Book.updateBook = (ctx, book) => {
    $.ajax({
      url: `${__API_URL__}/books`,
      method: 'PUT',
      data: {
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        url: book.url,
        description: book.description
      }
    })
      .then(() => page('/'));
  }

  module.Book = Book;
})(app)