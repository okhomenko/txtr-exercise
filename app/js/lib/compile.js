(function (BLN) {
    'use strict';

    function compile (template) {
        var container, children;

        container = document.createElement('div');
        container.innerHTML = template;
        children = container.childNodes;

        if (children.length > 1) throw new Error('Only one root node allowed');

        return children[0];
    }

    BLN.compile = compile;
}(window.BLN));