'use strict';

(function(module){
    
    let fetchAll = {};

    fetchAll.init = function (ctx, next) {
        $.get(`${__API_URL__}/books`)
        .then(function(data) {
            console.log('our data:', data);
        })

        next();
    }
    module.fetchAll = fetchAll;


})(window);