(function (BLN) {
    'use strict';

    BLN.ShelfBox = {
        template: '<ul class="shelf-box book-box"></ul>',

        render: function (cb) {
            this.el = BLN.compile(this.template);

            this.renderPlaceholder();

            (cb || BLN.noop)(this.el);

            return this;
        },

        clearEl: function () {
            this.el.innerHTML = '';
            this.renderPlaceholder();
        },

        renderPlaceholder: function () {
            this.el.appendChild(BLN.BookPlaceholder.render().el);
        },

        renderBooks: function (books) {
            var _this = this;

            BLN.Books.render(books, function (els) {
                _this.el.appendChild(els);
            });
        }
    };

}(window.BLN));
