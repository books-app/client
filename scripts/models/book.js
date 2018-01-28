'use strict';
var app = app || {};

(function(module) {
    const book = {};

    var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com';    

    // function Book (rawBookDataObj) {
    //     Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
    // }

    // Book.all = [];
    // Book.single = [];

    // Book.prototype.toHtml = function() {
    //     var template = Handlebars.compile($('#book-template').text());
    //     return template(this);
    // }

    // Book.renderAll = (ctx, next) => {
    //     $('#books').empty();
    //     app.Book.all.map(book => $('#books').append(book));
    // }

    // Book.loadAll = (ctx, next) => {
    //     Book.all = ctx.results.map(bookObject => new Book(bookObject));
    //     next();
    // }
    book.fetchAll = (ctx, next) => {
        $.get(`${__API_URL__ }/v1/books`)
            .then(results => {
                console.log(results);
                ctx.results = results;
                next();
            });
    }

    // Book.prototype.singleHtml = function() {
    //     var template = Handlebars.compile($('#individual-template').text());
    //     return template(this);
    // }

    // Book.renderSingle = (ctx, next) => {
    //     $('#individualBook').empty();
    //     app.Book.single.map(book => $('#individualBook').append(book.singleHtml()));
    //     $('#updateButton').attr('href', `/book/${ctx.params.book_id}/edit`)
    //     next();
    // }

    // Book.loadSingle = (ctx, next) => {
    //     console.log(ctx.results);
    //     Book.single = [];
    //     Book.single = ctx.results.map(bookObject => new Book(bookObject));
    //     next();
    // }

    // Book.fetchSingle = (ctx, next)  => {
    //     $.get(`${__API_URL__}/v1/books/${ctx.params.book_id}`)
    //        .then(results => {
    //            ctx.results = results;
    //            next();
    //        });
    // };

    book.insertRecord = function(){

        $('#book-form').on('submit', function(e) {
        e.preventDefault();
        
        let data = {
            title: e.target.title.value,
            author: e.target.author.value,
            isbn: e.target.isbn.value,
            image_url: e.target.image_url.value,
            description: e.target.description.value
        }
        
        $.post(`${__API_URL__}/v1/books`, data)
        .then(function() {
            console.log('hi')
        })
        .catch(function(err) {
            console.error(err);
        });
    });
}

    // Book.prototype.deleteRecord = (ctx, next) => {
    //     let book_id = ctx.params.book_id;
    //     $('.bookListing').on('click', $('#deleteButton'), function() {
    //         $.ajax({
    //             url: `${__API_URL__}/v1/books/${book_id}`,
    //             method: 'DELETE',
    //             success: function() {
    //                 window.location = '../';
    //             }
    //         })
    //     });
    // }

    // Book.renderEditSingle = (ctx, next) => {
    //     $('#author').val(Book.single[0].author);
    //     $('#description').val(Book.single[0].description);
    //     $('#image_url').val(Book.single[0].image_url);
    //     $('#isbn').val(Book.single[0].isbn);
    //     $('#title').val(Book.single[0].title);
    //     next();
    // }

    // Book.prototype.updateRecord = (ctx, next) => {
    //     let book_id = ctx.params.book_id;
    //     console.log('hi');
    //     console.log(book_id);
    //     $('#updateBookForm').on('submit', function(e) {
    //         e.preventDefault();
    //         $.ajax({
    //             url: `${__API_URL__}/v1/books/${book_id}/edit`,
    //             method: 'PUT',
    //             data: {
    //               title: $('#title').val(),
    //               author: $('#author').val(),
    //               isbn: $('#isbn').val(),
    //               image_url: $('#image_url').val(),
    //               description: $('#description').val()
    //             }
    //         })
    //     });
    // }

    module.book = book;
})(window);