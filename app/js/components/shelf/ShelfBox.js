(function (BLN) {
    'use strict';

    BLN.ShelfBox = {
        template: '<ul class="shelf-box book-box"></ul>',

        render: function (cb) {
            this.el = BLN.compile(this.template);

            this.renderPlaceholder();

            (cb || BLN.noop)(this.el);

            this.bind();

            return this;
        },

        clearEl: function () {
            this.el.innerHTML = '';
            this.renderPlaceholder();
        },

        renderPlaceholder: function () {
            var _this = this;
            BLN.BookPlaceholder.render(function (el) {
                _this.el.appendChild(el);
                el.innerText = 'Drop here';
            });
        },

        renderBooks: function (books) {
            var _this = this;

            BLN.Books.render(books, function (els) {
                _this.el.appendChild(els);
            });
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
        }
    };

}(window.BLN));
