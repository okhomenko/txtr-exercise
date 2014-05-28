(function (BLN) {
    'use strict';

    BLN.StoreBox = {
        template: '<ul class="store-box book-box"></ul>',

        render: function (cb) {
            this.el = BLN.compile(this.template);

            (cb || BLN.noop)(this.el);

            this.bind();

            return this;
        },

        bind: function () {
            this.handleDragStart();
        },

        handleDragStart: function () {
            this.el.addEventListener('dragstart', function (e) {
                var _this = e.target;

                if ([].indexOf.call(_this.classList, 'book') === -1) return false;
                e.dataTransfer.setData('application/json', JSON.stringify(_this.model));

            }, false);
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
