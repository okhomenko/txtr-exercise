(function (BLN) {
    'use strict';

    BLN.BookPlaceholder = {
        template: '<li class="book placeholder">Drop here</li>',

        render: function (cb) {
            this.el = BLN.compile(this.template);

            (cb || BLN.noop)(this.el);

            return this;
        }
    };

}(window.BLN));
