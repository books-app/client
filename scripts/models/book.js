'use strict';
var app = app || {};

(function(module) {
    const book = {};

    var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com';    //  var __API_URL__ = 'http://localhost:3000';

    // Constructor function
    function Book (rawBookDataObj) {
        Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
    }

    //Proerty of constructor, all books and single book respectively
    Book.all = [];
    Book.single = [];

    // 4TH - Handlebars template
    Book.prototype.toHtml = function() {
        var template = Handlebars.compile($('#book-template').text());
        return template(this);
    }

    // 3rd - maps book from constructor to tamplate and appends it to html
    Book.renderAll = (ctx, next) => {
        $('#books').empty();
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    }

    // 2ND - takes the results and maps it to  the new Book constructor
    Book.loadAll = (ctx, next) => {
        Book.all = ctx.results.map(bookObject => new Book(bookObject));
        next();
    }

    // 1st - AJAX REQUEST WHICH GO TO SERVER THEN DB, THIS JUST REQUEST ALL BOOKS DATA
    Book.fetchAll = (ctx, next) => {
        $.get(`${__API_URL__ }/v1/books`)
            .then(results => {
                ctx.results = results;
                next();
            });
    }

    // 4th - handlebars tamplate
    Book.prototype.singleHtml = function() {
        var template = Handlebars.compile($('#individual-template').text());
        return template(this);
    }

    // 3rd - maps book from constructor to tamplate and appends it to html
    Book.renderSingle = (ctx, next) => {
        $('#individualBook').empty();
        app.Book.single.map(book => $('#individualBook').append(book.singleHtml()));
        $('#updateButton').attr('href', `/book/${ctx.params.book_id}/edit`)
        next();
    }

    // 2ND - takes the individual result and maps it to  the new Book constructor
    Book.loadSingle = (ctx, next) => {
        console.log(ctx.results);
        Book.single = [];
        Book.single = ctx.results.map(bookObject => new Book(bookObject));
        next();
    }

    // 1st - AJAX REQUEST WHICH GO TO SERVER THEN DB, THIS JUST REQUEST INDIVIDUAL BOOK DATA
    Book.fetchSingle = (ctx, next)  => {
        $.get(`${__API_URL__}/v1/books/${ctx.params.book_id}`)
           .then(results => {
               ctx.results = results;
               next();
           });
    };

    // POST - Inserts a new record into the database
    Book.prototype.insertRecord = function(){
        $.ajax({
            url: `${__API_URL__ }/v1/books`,
            method: 'POST',
            data: {
              title: this.title,
              author: this.author,
              isbn: this.isbn,
              image_url: this.image_url,
              description: this.description
            },
            success: window.location = '../',
        })
    };

    // Delete - removes a record from the database
    Book.prototype.deleteRecord = (ctx, next) => {
        let book_id = ctx.params.book_id;
        $('.bookListing').on('click', $('#deleteButton'), function() {
            $.ajax({
                url: `${__API_URL__}/v1/books/${book_id}`,
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
        $('#image_url').val(Book.single[0].image_url);
        $('#isbn').val(Book.single[0].isbn);
        $('#title').val(Book.single[0].title);
        next();
    }

    Book.prototype.updateRecord = (ctx, next) => {
        let book_id = ctx.params.book_id;
        console.log('hi');
        console.log(book_id);
        $('#updateBookForm').on('submit', function(e) {
            e.preventDefault();
            console.log($('#title').val(), $('#author').val(), $('#isbn').val(), $('#image_url').val(), $('#description').val());
            // let book = {
            //     title: `$('#title').val()`,
            //     author: `$('#author').val()`,
            //     isbn: `$('#isbn').val()`,
            //     image_url: `$('#image_url').val()`,
            //     description: `$('#description').val()`,
            // };
            $.ajax({
                url: `${__API_URL__}/v1/books/${book_id}/edit`,
                method: 'PUT',
                data: {
                  title: $('#title').val(),
                  author: $('#author').val(),
                  isbn: $('#isbn').val(),
                  image_url: $('#image_url').val(),
                  description: $('#description').val()
                }
            })
        });
    }

    module.Book = Book;
})(app);