'use strict';

page('/', homeView.init, app.Book.fetchAll, app.Book.loadAll, app.Book.renderAll);
page('/new', newBookView.init);
page('/book/:book_id', singleBookView.init, app.Book.fetchSingle, app.Book.loadSingle, app.Book.renderSingle, app.Book.prototype.deleteRecord);
page('/book/:book_id/edit', editBookView.init, app.Book.fetchSingle, app.Book.loadSingle, app.Book.renderEditSingle, app.Book.prototype.updateRecord);


page();