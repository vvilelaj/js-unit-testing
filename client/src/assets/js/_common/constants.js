'use strict'

var Constants = function () {
    var _localStorageKey = function () {
        return {
            isUserLoggedIn : 'isUserLoggedIn'
        };
    };

    return {
        localStorageKey: _localStorageKey()
    }
}();