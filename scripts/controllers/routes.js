'use strict';

page('/', homeView.init, books.fetchAll, books.loadAll, books.reander);
page('/new', newBookView.init);
page('/book/:book_id', singleBookView.init, books.fetchSingle,books.loadSingle, books.renderSingle, books.delete);
// page('/book/:book_id/edit', editBookView.init, books.fetchSingle, books.loadSingle, books.renderEditSingle, books.updatebook);


page();