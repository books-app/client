'use strict';

(function(module) {
    const editBookView = {};

    editBookView.init = function(ctx, next) {
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#singleBookView').hide();
        $('#editBookView').show();
        next();
    }
    
    module.editBookView = editBookView;
})(window);