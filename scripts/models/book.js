'use strict';

(function(module) {
    const books = {};

    var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com/';    

    function Book (rawBookDataObj) {
        Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
    }

    books.all= [];
    books.single = [];

    /// all books
    
    books.fetchAll = (ctx, next) => {
        $.get(`${__API_URL__ }/v1/books`)
            .then(results => {
                ctx.results = results;
                next();
            });
    }

    books.loadAll = (ctx, next) => {
        books.all= ctx.results.map(bookObject => new Book(bookObject));
        next();
    }

    books.reander = (ctx, next) => {
        $('#books').empty();
        books.all.map(book => $('#books').append(books.toHtml()));
    }


    books.toHtml = function() {
        var template = Handlebars.compile($('#book-template').text());
        return template(this);
    }

    /// one book

    books.fetchSingle = (ctx, next)  => {
        $.get(`${__API_URL__}/v1/books/${ctx.params.book_id}`)
           .then(results => {
               ctx.results = results;
               next();
           });
    };

    books.renderSingle = (ctx, next) => {
        $('#individualBook').empty();
        books.single.map(book => $('#individualBook').append(books.singleHtml()));
        $('#updateButton').attr('href', `/book/${ctx.params.book_id}/edit`)
        next();
    }

    books.loadSingle = (ctx, next) => {
        console.log(ctx.results);
       books.single = [];
       books.single = ctx.results.map(bookObject => new Book(bookObject));
        next();
    }
   

    books.singletoHtml = function() {
        var template = Handlebars.compile($('#individual-template').text());
        return template(this);
    }
    
    ///add book 

    // books.addbook = (ctx, next) => {
    //     $.ajax({
    //         url: `${__API_URL__ }/v1/books`,
    //         method: 'POST',
    //         data: {
    //           title: ctx.title,
    //           author: ctx.author,
    //           isbn: ctx.isbn,
    //           image_url: ctx.image_url,
    //           description: ctx.description
    //         },
    //         success: window.location = '../',
    //     })
    // };

    /////delete book//////////???????????????????????????????

    books.delete = (ctx, next) => {
        let book_id = ctx.params.book_id;

        console.log(book_id);
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

    books.renderEditSingle = (ctx, next) => {
        $('#author').val(books.single[0].author);
        $('#description').val(books.single[0].description);
        $('#image_url').val(books.single[0].image_url);
        $('#isbn').val(books.single[0].isbn);
        $('#title').val(books.single[0].title);
        next();
    }

    books.updatebook = (ctx, next) => {
        let book_id = ctx.params.book_id;
        $('#updateBookForm').on('submit', function(e) {
            e.preventDefault();
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

    module.books = books;
})(window);