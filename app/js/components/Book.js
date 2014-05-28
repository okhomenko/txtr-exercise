(function (BLN) {
    'use strict';

    BLN.Book = {
        template: [
            '<li class="book" draggable="true">',
                '<div class="img" />',
            '</li>'
        ].join(''),

        render: function (book) {
            this.cachedEl = this.cachedEl || BLN.compile(this.template);
            var clone = this.cachedEl.cloneNode(true);

            clone.querySelector('.img').style.backgroundImage = 'url("' + book.cover_image_url + '")';
            clone.model = book;

            return clone;
        }

    };

}(window.BLN));




