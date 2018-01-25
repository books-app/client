
'use strict';

(function(module) {

  const books = {};

  books.init = function pageLoad() {
    $.get(`${__API_URL__}/books`)
    .then(function(data) {
      console.log('our data:', data);
      // $('#results').empty();
  
      data.rows.forEach(function(item) {
        let content = `

          <div id='book'>
          <img src = "${item.pic_url}">
          <p>title: ${item.book_title}</p>
          <p>author name: ${item.author}</p>
          <button id="book-but" value = "${item.id}">more deatils</button>
          </div>
        `;
        $('#results').append(content);
      });
    }, function(err) {
      console.error(err);
    });
  }

  module.books = books;

})(window);