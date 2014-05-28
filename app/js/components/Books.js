(function (BLN) {
    'use strict';

    BLN.Books = {

        render: function (books, cb) {
            var container = document.createDocumentFragment();

            books.map(BLN.Book.render.bind(BLN.Book)).forEach(function (el) {
                container.appendChild(el);
            });

            (cb || BLN.noop)(container);

            return container;
        }
    };

}(window.BLN));
