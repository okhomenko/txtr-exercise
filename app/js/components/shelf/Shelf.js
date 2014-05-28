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

            _this.collection = BLN.ShelfCollection;
            _this.collection.init();
            _this.shelfBox.renderBooks(_this.collection.models);

            this.bind();

            return this;
        },

        handleDragOver: function (e) {
            if (e.preventDefault) e.preventDefault(); // allows us to drop
            return false;
        },

        bookExists: function (book) {

        },

        handleDrop: function (e) {
            var _this = this;
            var book = JSON.parse(e.dataTransfer.getData('application/json'));

            if (_this.collection.exists(book)) return false;

            _this.collection.add(book);
            _this.shelfBox.renderBooks(_this.collection.models);
            return false;
        },

        bind: function () {
            this.el.addEventListener('dragover', this.handleDragOver);
            this.el.addEventListener('drop', this.handleDrop.bind(this));
        }

    };

}(window.BLN));
