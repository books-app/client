'use strict';

(function(module) {

    const onebook= {};

    onebook.init = function() {
        $('#book-bot').on('click', function(e) {
            e.preventDefault();
            let onebook = e.target.button.value;

            $.get(`${__API_URL__}/books`, onebook)
              .then(function(data) {
                  let book =` 
        <div>          
        <h1>${data.book_title}</h1>
        <p>${data.author}</p>
        <p>${data.isbn}</p>
        <img src="${data.pic_url}">
        <p>${data.descr}</p>
        </div>
        `;
        $('#results').empty();
        $('#results').append(book);
    });
}, function(err) {
  console.error(err);
})}

module.onebook = onebooks;

})(window);
  

