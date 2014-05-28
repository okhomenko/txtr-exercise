(function (root, Component) {
    'use strict';

    var template = '<div class="book-block"></div>';

    function BookBlock(props) {
        props = props || {};
        this.props = props;

        if (typeof this.initState === 'function') {
            this.setState(this.initState());
        }
    }

    BookBlock.prototype.initState = function () {
        return {
            query: 'aaa'
        };
    };

    BookBlock.prototype.setState = function (state) {
        this.state = state;
    };

    BookBlock.prototype.render = function () {
        this.el = Component.compileTemplate(template);
        this._renderChildren();

        return this;
    };

    BookBlock.prototype._renderChildren = function () {

        Component.renderComponent(root.SearchBox, {
            query: this.state.query,
            onChange: this.handleChange.bind(this)
        }, this.el);

    };

    BookBlock.prototype.handleChange = function (opts) {
        console.log(opts);
        this.setState(opts);
    };

    root.BookBlock = BookBlock;

}(window.BLN, window.BLN.Component));