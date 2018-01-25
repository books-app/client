'use strict';

var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com'; 



// $('#book-form').on('submit', function(e) {
//   e.preventDefault();

//   let data = {
//     book_title: e.target.book_title.value,
//     author: e.target.author.value,
//     ISBN: e.target.isbn.value,
//     pic_url: e.target.pic_url.value,
//     descr: e.target.descr.value
//   }

//   $.post(`${__API_URL__}/books`, data)
//   .then(function() {
//     pageLoad();
//   })
//   .catch(function(err) {
//     console.error(err);
//     pageLoad();
//   });
// });

// function pageLoad() {
//   $.get(`${__API_URL__}/books`)
//   .then(function(data) {
//     console.log('our data:', data);
//     // $('#results').empty();

//     data.rows.forEach(function(item) {
//       let content = `

//         <div id='book'><img src = "${item.pic_url}">
//         <p>title: ${item.book_title}</p>
//         <p>author name: ${item.author}</p></div>
//       `;
//       $('#results').append(content);
//     });
//   }, function(err) {
//     console.error(err);
//   });
// }

// pageLoad();