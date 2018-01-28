'use strict';

var app = app || {};
(function(module) {

  const view = {};
  view.home = function(ctx, next) {
      $('#singleBookView').hide();
      $('#errorView').hide();
      $('#newBookView').hide();
      $('#editBookView').hide();
      $('#home_view').show();
      next();
  }
  view.onebook_edit = function(ctx, next) {
    console.log('hi');
    $('#errorView').hide();
    $('#home_view').hide();
    $('#newBookView').hide();
    $('#singleBookView').hide();
    $('#editBookView').show();
    next();
  }
  view.onebook_init = function() {
    $('#singleBookView').hide();
    $('#errorView').hide();
    $('#home_view').hide();
    $('#editBookView').hide();
    $('#newBookView').show();
    $('#newBookForm').on('submit', view.onebook_submit);
}
  view.onebook_submit = e => {
    e.preventDefault();
    let book = new app.Book({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      url: $('#url').val(),
      description: $('#description').val(),
    });
    book.addRecord();
  }
  view.singlebook_init = function(ctx, next) {
    // console.log('singlebookbookView.init', ctx.params.id);
    $('#errorView').hide();
    $('#home_view').hide();
    $('#newBookView').hide();
    $('#editBookView').hide();
    $('#singleBookView').show();
    next();
}

module.view = view;
})(app)







  

  // const bookView = {};

  // //This resets the state of the page every time one of these init funtions is called.

  // //This inititalizes the homepage.
  // bookView.initIndexPage = function() {
  //   reset();
  //   $('.book-view').show();
  //   $('#all-books').empty();
  //   app.Book.all.map(book => $('#all-books').append(book.toHtml()));
  // }
  //   // Initializes and handles the form for adding a new book
  //   bookView.initAddForm = function() {
  //       reset();
  //       $('.add-view').show();
  //       $('#new-book').on('submit', function(event) {
  //         event.preventDefault();
  //         let book = {
  //           title: event.target.title.value,
  //           author: event.target.author.value,
  //           isbn: event.target.isbn.value,
  //           url: event.target.url.value,
  //           description: event.target.description.value,
  //         };
  //         module.Book.createBook(book);
  //       })
  //     }
    
  //     //Form for updating a book. Should display current book info and create a new book from any changes made, passed to the updateBook function.
  //     bookView.initUpdateForm = function (ctx) {
  //       reset();
  //       $('.update-view').show();
  //       $('#updateTitle').val(ctx.title);
  //       $('#updateAuthor').val(ctx.author);
  //       $('#updateISBN').val(ctx.isbn);
  //       $('#updateurl').val(ctx.url);
  //       $('#updateDescription').val(ctx.description);
  //       $('#update-form').on('submit', function(event) {
  //         event.preventDefault();
  //         let book = {
  //           id: ctx.id,
  //           title: event.target.title.value,
  //           author: event.target.author.value,
  //           isbn: event.target.isbn.value,
  //           url: event.target.url.value,
  //           description: event.target.description.value,
  //         };
  //         module.Book.updateBook(ctx, book);
  //       })
  //     }

  //       //Initilizes and appends data for the detailed view of a single book. Makes the admin login menu item visible. Includes event handler for the book delete.
  // bookView.initDetailPage = function (ctx) {
  //   reset();
  //   $('#login').show();
  //   $('.detail-view').show();
  //   $('#book-detail').empty();
  //   let template = Handlebars.compile($('#book-detail-template').text());
  //   $('#book-detail').append(template(ctx));
  //   $('#admin-controls').hide();
  //   $('#delete-book').on('click', () => {
  //     app.Book.deleteBook(ctx);
  //   });
  // }


