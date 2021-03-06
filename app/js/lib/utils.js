(function (BLN) {
    'use strict';

    function noop() {}

    function parseJSON(res) {
        return JSON.parse(res);
    }

    /**
     * Make AJAX request, API is subset of jQuery.ajax API
     * opts = {
     *   url: url,
     *   success: function(response) {},
     *   error: function(xhr) {},
     *   data: "valid JS object or string",
     *   dataType: 'json'
     * }
     *
     * @param opts
     * @returns {XMLHttpRequest}
     */
    function ajax(opts) {
        opts = opts || {};

        var xhr = new XMLHttpRequest(), res, data;

        xhr.open('GET', opts.url, true);

        function onready() {
            // DONE
            if (xhr.readyState === 4) {

                // success status code
                if ((xhr.status + '').charAt(0) === '2') {
                    res = opts.dataType === 'json' ? parseJSON(xhr.responseText)
                        : xhr.responseText;

                    (opts.success || noop)(res);
                } else {
                    (opts.error || noop)(xhr);
                }

            }
        }

        xhr.onreadystatechange = onready;

        data = opts.data;
        if (typeof data !== 'undefined') {
            data = typeof data === 'string' ? data : JSON.stringify(data);
        }

        xhr.send(data || '');
        return xhr;
    }


    function compile (template) {
        var container, children;

        container = document.createElement('div');
        container.innerHTML = template;
        children = container.childNodes;

        if (children.length > 1) throw new Error('Only one root node allowed');

        return children[0];
    }

    BLN.noop = noop;
    BLN.ajax = ajax;
    BLN.compile = compile;

}(window.BLN));