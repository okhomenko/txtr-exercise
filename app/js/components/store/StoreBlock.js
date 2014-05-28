(function (BLN) {
    'use strict';

    BLN.StoreBlock = {
        template: '<div class="store-block"></div>',

        render: function (cb) {
            var _this = this;
            this.el = BLN.compile(this.template);

            this.searchBox = BLN.StoreSearchBox.render(function (el) {
                _this.el.appendChild(el);
            });

            this.searchBox.onChange = this.fetchBooks.bind(this);

            this.storeBox = BLN.StoreBox.render(function (el) {
                _this.el.appendChild(el);
            });

            (cb || BLN.noop)(this.el);

            return this;
        },

        fetchError: function () {

        },

        fetchBooks: function (query) {
            var _this = this;
            BLN.ajax({
                url: 'http://turbine-staging-eu.herokuapp.com/books?q=' + query,
                success: _this.storeBox.renderBooks.bind(_this.storeBox),
                error: _this.fetchError,
                dataType: 'json'
            });

        }
    };

}(window.BLN));
