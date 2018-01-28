'use strict';

page('/', view.home, app.Book.fetchAll, app.Book.loadAll, app.Book.renderAll);
page('/new', app.view.onebook_init);
page('/book/:id', view.singlebook_init, app.Book.fetchSingle, app.Book.loadSingle, app.Book.renderSingle, app.Book.prototype.deleteRecord);
page('/book/:id/edit', view.onebook_edit, app.Book.fetchSingle, app.Book.loadSingle, app.Book.renderEditSingle, app.Book.prototype.updateRecord);
page();