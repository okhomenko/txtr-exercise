

(function (BLN) {
    'use strict';

    BLN.StoreSearchBox = {
        template: [
            '<div class="search-box">',
                '<label>',
                    '<span>Search:</span>',
                    '<input autofocus type="search" class="query" />',
                '</label>',
            '</div>'
        ].join(''),

        render: function (cb) {
            this.el = BLN.compile(this.template);
            this.q = this.el.querySelector('.query');

            (cb || BLN.noop)(this.el);

            this.bind();

            return this;
        },

        bind: function () {
            this.handleEnter();
        },

        handleEnter: function () {
            var _this = this;

            this.el.addEventListener('keydown', function (e) {
                var code = e.keyCode || e.which;

                console.log(_this, _this.el);
                if (code !== 13) return;
                var q = _this.q.value.trim();
                if (q === '') return;

                _this.onChange(q);
            });
        }
    };

}(window.BLN));
