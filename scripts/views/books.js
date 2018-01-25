
'use strict';


(function(module) {

  let books = {};

  $('#results').empty();  
  
  books.init = function (ctx, next) {
      data.rows.forEach(function(ctx) {
        let content = `        
        <div id='book'>
        <img src = "${ctx.pic_url}">
        <p>title: ${ctx.book_title}</p>
        <p>author name: ${ctx.author}</p>
        <button id="book-but" value = "${ctx.id}">more deatils</button>
        </div>
      `});
        $('#results').append(content);
    }, function(err) {
      console.error(err);
   }
  
  module.books = books;

})(window);