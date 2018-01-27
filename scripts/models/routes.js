'use strict';

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initAddForm(ctx));
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/update', ctx => app.bookView.initUpdateForm(ctx));
page('/books/:id/update', ctx => app.Book.fetchOne(ctx, app.bookView.initUpdateForm));
page();