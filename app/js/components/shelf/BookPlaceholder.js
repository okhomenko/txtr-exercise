(function (BLN) {
    'use strict';

    BLN.BookPlaceholder = {
        template: '<li class="book placeholder"></li>',

        render: function (cb) {
            this.cachedEl = this.cachedEl || BLN.compile(this.template);

            var clone = this.cachedEl.cloneNode(true);

            (cb || BLN.noop)(clone);
        }
    };

}(window.BLN));
