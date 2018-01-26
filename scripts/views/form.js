
// 'use strict';


// var __API_URL__ = 'https://ryanandrii-booksapp.herokuapp.com'; 


// (function(module) {
//   const add= {};

//   add.catch = function(ctx, next) {
//       $('#results').fadeOut();
//       $('#book-form').css('display','block');
//       $('#book-form').on('submit', function(e) {
//       e.preventDefault();
    
//       ctx.book = {
//         book_title: e.target.book_title.value,
//         author: e.target.author.value,
//         ISBN: e.target.isbn.value,
//         pic_url: e.target.pic_url.value,
//         descr: e.target.descr.value
//       };
//     });
// }
//     add.send = function (ctx, next){
    
//       $.post(`${__API_URL__}/books`, ctx.book)
//       .then(function() {
//         indexPage.getData();
//       })
//       .catch(function(err) {
//         console.error(err);
//         books.init();
//       });
//     };
//   module.add = add;
// })(window);