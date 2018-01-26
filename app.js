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





// $(document).ready(function() {
//   $('#onebook').on('click', function(){
//     $('#book-form').css('display','block');
//   });
//   $('#book-form').on('submit', function(e) {
//     e.preventDefault();
  
//     let data = {
//       book_title: e.target.book_title.value,
//       author: e.target.author.value,
//       ISBN: e.target.isbn.value,
//       pic_url: e.target.pic_url.value,
//       descr: e.target.descr.value
//     }
  
//     $.post(`${__API_URL__}/books`, data)
//     .then(function() {
//       books.init();
//     })
//     .catch(function(err) {
//       console.error(err);
//       books.init();
//     });
//   });
//   });

