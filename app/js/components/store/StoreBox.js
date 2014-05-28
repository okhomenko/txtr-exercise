(function (BLN) {
    'use strict';

    BLN.StoreBox = {
        template: '<ul class="store-box book-box"></ul>',

        render: function (cb) {
            this.el = BLN.compile(this.template);

            (cb || BLN.noop)(this.el);

            return this;
        },

        renderBooks: function (books) {
            var _this = this;

            this.el.innerHTML = '';
            BLN.Books.render(books, function (els) {
                _this.el.appendChild(els);
            });
        }
    };

}(window.BLN));
