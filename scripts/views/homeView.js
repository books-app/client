'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function(ctx, next) {
        $('#singleBookView').hide();
        $('#errorView').hide();
        // $('#newBookView').hide();
        $('#editBookView').hide();
        $('#homeView').show();
        next();
    }

    module.homeView = homeView;
})(window);