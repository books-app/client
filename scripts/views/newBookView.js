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
        let book = new app.Book({
          title: $('#title').val(),
          author: $('#author').val(),
          isbn: $('#isbn').val(),
          image_url: $('#image_url').val(),
          description: $('#description').val(),
        });
        Book.insertRecord();
      }
    
    module.newBookView = newBookView;
})(window);