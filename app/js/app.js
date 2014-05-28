(function (root, BLN) {
    'use strict';

    function success(books) {
        console.log('success - ', books);
    }

    function error(xhr) {
        console.log('error - ', xhr);
    }


    var store = BLN.Store.render();
    var shelf = BLN.Shelf.render();

    document.querySelector('.bln-container').appendChild(store.el);
    document.querySelector('.bln-container').appendChild(shelf.el);
}(window, window.BLN));