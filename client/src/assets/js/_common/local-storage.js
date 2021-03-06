'use strict';

var LocalStorage = function () {

    var _setItem = function (key, data) {
        var value = JSON.stringify(data);
        localStorage.setItem(key, value);
    }

    var _getItem = function (key) {
        var value = localStorage.getItem(key);
        value = JSON.parse(value);
        return value;
    }

    var _removeItem = function (key) {
        localStorage.removeItem(key);
    }

    return {
        setItem: _setItem,
        getItem: _getItem,
        removeItem: _removeItem
    };
};