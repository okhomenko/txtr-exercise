(function (root) {
    'use strict';

    function Component() {}

    Component.compileTemplate = function (template) {
        var container, children;

        container = document.createElement('div');
        container.innerHTML = template;
        children = container.childNodes;

        if (children.length > 1) throw new Error('Only one root node allowed');

        return children[0];
    };

    Component.renderComponent = function (Constructor, props, container) {
        var instance = new Constructor(props);

        container.appendChild(instance.render().el);
    };

    root.Component = Component;
}(window.BLN));