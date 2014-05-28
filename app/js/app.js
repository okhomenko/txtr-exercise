(function (root, BLN) {
    'use strict';

    function success(books) {
        console.log('success - ', books);
    }

    function error(xhr) {
        console.log('error - ', xhr);
    }

    BLN.ajax({
        url: 'http://turbine-staging-eu.herokuapp.com/books?q=ruby',
        success: success,
        error: error,
        dataType: 'json'
    }).abort();

    document.querySelector('.bookstore').appendChild((new BLN.BookBlock).render().el)
}(window, window.BLN));