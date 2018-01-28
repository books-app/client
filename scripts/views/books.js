'use strict';

var app = app || {};

(function(module) {

  var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com'; 

  const book = {};

  function Book (rawBookDataObj) {
      Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
  }

 
  Book.all = [];
  Book.single = [];

 
  Book.prototype.toHtml = function() {
      var template = Handlebars.compile($('#one-book').text());
      return template(this);
  }

  Book.renderAll = (ctx, next) => {
      $('#books').empty();
      app.Book.all.map(book => $('#books').append(book.toHtml()));
  }

  Book.loadAll = (ctx, next) => {
    Book.all = ctx.results.map(bookObject => new Book(bookObject));
    next();
  }

 
  Book.fetchAll = (ctx, next) => {
      $.get(`${__API_URL__ }/books`)
          .then(data => {
              ctx.results = data;
              next();
          });
  }

  Book.prototype.singleHtml = function() {
      var template = Handlebars.compile($('#individual-template').text());
      return template(this);
  }

  Book.renderSingle = (ctx, next) => {
      $('#individualBook').empty();
      app.Book.single.map(book => $('#individualBook').append(book.singleHtml()));
      $('#updateButton').attr('href', `/book/${ctx.params.id}/edit`)
      next();
  }

  Book.loadSingle = (ctx, next) => {
      console.log(ctx.results);
      Book.single = [];
      Book.single = ctx.results.map(bookObject => new Book(bookObject));
      next();
  }

  Book.fetchSingle = (ctx, next)  => {
      $.get(`${__API_URL__}/books/${ctx.params.id}`)
          .then(data => {
              ctx.results = data;
              next();
          });
  };

  Book.prototype.addRecord = function(){
      $.ajax({
          url: `${__API_URL__ }/books`,
          method: 'POST',
          data: {
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            url: this.url,
            description: this.description
          },
          success: window.location = '../',
      })
  };

  Book.prototype.deleteRecord = (ctx, next) => {
      let id = ctx.params.id;
      $('.bookListing').on('click', $('#deleteButton'), function() {
          $.ajax({
              url: `${__API_URL__}/books/${id}`,
              method: 'DELETE',
              success: function() {
                  window.location = '../';
              }
          })
      });
  }

// UPDATE/PUT
  // 3rd - adds this boks values to edit form
  Book.renderEditSingle = (ctx, next) => {
      $('#author').val(Book.single[0].author);
      $('#description').val(Book.single[0].description);
      $('#url').val(Book.single[0].url);
      $('#isbn').val(Book.single[0].isbn);
      $('#title').val(Book.single[0].title);
      next();
  }

  Book.prototype.updateRecord = (ctx, next) => {
      let id = ctx.params.id;
      console.log(id);
      $('#updateBookForm').on('submit', function(e) {
          e.preventDefault();
          $.ajax({
              url: `${__API_URL__}/books/${id}/edit`,
              method: 'PUT',
              data: {
                title: $('#title').val(),
                author: $('#author').val(),
                isbn: $('#isbn').val(),
                url: $('#url').val(),
                description: $('#description').val()
              }
          })
      });
  }

  module.Book = Book;
})(app);