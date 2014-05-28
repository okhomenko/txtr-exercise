(function (BLN) {
    'use strict';

    BLN.Shelf = {
        template: [
            '<div class="shelf-block">',
                '<label>Shelf <span class="amount"></span>: ',
                    '<span class="exists-warn hide">' +
                        'This book already is in the list' +
                    '</span>',
                '</label>',
            '</div>'
        ].join(''),

        render: function (cb) {
            var _this = this;

            this.el = BLN.compile(this.template);
            this.amount = this.el.querySelector('.amount');
            this.existsWarn = this.el.querySelector('.exists-warn');

            (cb || BLN.noop)(this.el);

            this.shelfBox = BLN.ShelfBox.render(function (el) {
                _this.el.appendChild(el);
            });

            this.collection = BLN.ShelfCollection;
            this.collection.init();
            this.renderBooks();

            this.bind();

            return this;
        },

        updateAmount: function () {
            var amount = this.collection.models.length;
            if (amount === 0) return;
            this.amount.innerText = '(' + amount + ')';
        },

        renderBooks: function () {
            this.shelfBox.renderBooks(this.collection.models);
            this.updateAmount();
        },

        showExistsWarn: function () {
            this.existsWarn.classList.remove('hide');
            setTimeout(this.hideExistsWarn.bind(this), 1000);
        },

        hideExistsWarn: function () {
            this.existsWarn.classList.add('hide');
        },

        handleDragOver: function (e) {
            if (e.preventDefault) e.preventDefault(); // allows us to drop
            return false;
        },

        handleDrop: function (e) {
            var _this = this, data;

            data = e.dataTransfer.getData('application/json');
            if (!data) return false;
            var book = JSON.parse(data);

            if (_this.collection.exists(book)) {
                _this.showExistsWarn();
                return false;
            }

            _this.collection.add(book);
            _this.renderBooks();
            return false;
        },

        bind: function () {
            this.el.addEventListener('dragover', this.handleDragOver);
            this.el.addEventListener('drop', this.handleDrop.bind(this));
        }

    };

}(window.BLN));
