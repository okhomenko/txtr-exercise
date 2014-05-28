(function (root, BLN) {
    'use strict';

    var store = BLN.Store.render();
    var shelf = BLN.Shelf.render();

    document.querySelector('.bln-container').appendChild(store.el);
    document.querySelector('.bln-container').appendChild(shelf.el);
}(window, window.BLN));