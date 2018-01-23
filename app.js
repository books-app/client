'use strict';

var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com'; 

pageLoad();

$('#book-form').on('submit', function(e) {
  e.preventDefault();

  let data = {
    book_id: e.target.book_id.value,
    book_title: e.target.book_title.value,
    author: e.target.author.value,
    ISBN: e.target.isbn.value,
    pic_url: e.target.pic_url.value,
    description: e.target.description.value
  }

  $.post(`${__API_URL__}/books`, data)
  .then(function() {
    pageLoad();
  })
  .catch(function(err) {
    console.error(err);
    pageLoad();
  });
});

function pageLoad() {
  $.get(`${__API_URL__}/books`)
  .then(function(data) {
    console.log('our data:', data);
    $('#results').empty();

    data.rows.forEach(function(item) {
      let content = `
        <h2>book_id ${item.book_id}</h2>
        <p>title: ${item.book_title}</p>
        <p>author name: ${item.author}</p>
        <p>isbn: ${item.ISBN}</p>
        <img src = "${item.pic_url}">
        <p> description ${item.description}</p>
      `;
      $('#results').append(content);
    });
  }, function(err) {
    console.error(err);
  });
}