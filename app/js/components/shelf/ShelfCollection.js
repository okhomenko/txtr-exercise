(function (BLN) {
    'use strict';

    BLN.ShelfCollection = {
        lsKey: 'BLN-shelf',

        init: function () {
            this.models = JSON.parse(localStorage.getItem(this.lsKey) || "[]");
        },

        add: function (model) {
            this.models.push(model);
            this.save();
            console.log(JSON.stringify(this.models));
        },

        save: function () {
            localStorage.setItem(this.lsKey, JSON.stringify(this.models));
        },

        exists: function (model) {
            var id = model.udid;
            return this.models.some(function (model) {
                return model.udid === id;
            });
        }
    };

}(window.BLN));