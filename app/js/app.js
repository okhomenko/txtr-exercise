(function (root, BLN) {
    'use strict';

    function success(books) {
        console.log('success - ', books);
    }

    function error(xhr) {
        console.log('error - ', xhr);
    }


    var storeBlock = BLN.StoreBlock.render();

    document.querySelector('.bln-container').appendChild(storeBlock.el);
}(window, window.BLN));