(function (root) {
    'use strict';

    var template = [
        '<div class="search-box">',
            '<label>',
                '<span>Search:</span>',
                '<input autofocus type="search" class="query" />',
            '</label>',
        '</div>'
    ].join('');

    function SearchBox(props) {
        props = props || {};
        this.props = props;
    }

    SearchBox.prototype.render = function () {
        var container = document.createElement('div');
        container.innerHTML = template;

        this.el = container.childNodes[0];
        this.query = this.el.querySelector('.query');
        console.log(this.query);
        this.query.value = this.props.query;

        this.query.addEventListener('keydown', this.handleChange.bind(this));

        return this;
    };

    SearchBox.prototype.handleChange = (function () {
        var hTimeout, tts = 600; // time between keydown needed to send request

        return function (e) {
            var q = this.query.value.trim();
            if (q === '' || q === this.props.query) return;

            if (hTimeout) clearTimeout(hTimeout);

            hTimeout = setTimeout(function () {
                this.props.onChange({
                    query: q
                });
            }.bind(this), tts);
        };
    }());

    root.SearchBox = SearchBox;

}(window.BLN));