'use strict';

(function(module) {
  const add = {};

  add.init = function() {
    $('#book-form').css('display','block');
    $('#results').css('display', 'none');

    $('#book-form').on('submit', function(e) {
        e.preventDefault();
      
        let data = {
          book_title: e.target.book_title.value,
          author: e.target.author.value,
          ISBN: e.target.isbn.value,
          pic_url: e.target.pic_url.value,
          descr: e.target.descr.value
        }
      
        $.post(`${__API_URL__}/books`, data)
        .then(function() {
          books();
        })
        .catch(function(err) {
          console.error(err);
          books();
        });
      });


  }

  module.add = add;
})(window);
