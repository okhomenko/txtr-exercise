(function (BLN) {
    'use strict';

    BLN.Shelf = {
        books: [],
        template: '<div class="shelf-block"></div>',

        render: function (cb) {
            var _this = this;
            this.el = BLN.compile(this.template);

            (cb || BLN.noop)(this.el);

            this.shelfBox = BLN.ShelfBox.render(function (el) {
                _this.el.appendChild(el);
            });

            this.bind();

            return this;
        },

        handleDragOver: function (e) {
            if (e.preventDefault) e.preventDefault(); // allows us to drop
            return false;
        },

        bookExists: function (book) {
            var id = book.udid;
            return this.books.some(function (book) {
                return book.udid === id;
            });
        },

        handleDrop: function (e) {
            var _this = this;
            var book = JSON.parse(e.dataTransfer.getData('application/json'));

            if (_this.bookExists(book)) return false;

            _this.add(book);
            _this.shelfBox.renderBooks(_this.books);
            return false;
        },

        bind: function () {
            this.el.addEventListener('dragover', this.handleDragOver);
            this.el.addEventListener('drop', this.handleDrop.bind(this));
        },

        add: function (book) {
            this.books.push(book);
        }
    };

}(window.BLN));
