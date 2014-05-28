(function (BLN) {
    'use strict';

    BLN.ShelfBox = {
        template: '<div class="shelf-block"></div>',

        render: function (cb) {
            this.el = BLN.compile(this.template);

            (cb || BLN.noop)(this.el);

            return this;
        }
    };

}(window.BLN));
