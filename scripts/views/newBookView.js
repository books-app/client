'use strict';

(function(module) {
    let newBookView = {};

    newBookView.init = function() {
        $('#singleBookView').hide();
        $('#homeView').hide();
        $('#editBookView').hide();
        $('#newBookView').show();
        $('#newBookForm').on('submit', newBookView.submit);
    }

    newBookView.submit = e => {
        e.preventDefault();
        let book = new Book({
            title: e.target.title.value,
            author: e.target.author.value,
            isbn: e.target.isbn.value,
            image_url: e.target.image_url.value,
            description: e.target.description.value

        });
        $.ajax({
            url: `${__API_URL__ }/v1/books`,
            method: 'POST',
            data: {
              title: book.title,
              author: book.author,
              isbn: book.isbn,
              image_url: book.image_url,
              description: book.description
            },
            success: window.location = '../',
        })
        console.log(book);
        books.addbook();
    };
  
    module.newBookView = newBookView;
})(window);