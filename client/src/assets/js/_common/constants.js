'use strict'

var Constants = function () {
    var _localStorageKey = function () {
        return {
            isUserLoggedIn : 'isUserLoggedIn'
        };
    };
    var _backedApiClient = function () {
        return {
            baseUrl : 'http://localhost:3001/',
            apiAuthLoginPost : 'api/auth/login'
        };
    };

    return {
        localStorageKey: _localStorageKey(),
        backedApiClient: _backedApiClient()
    }
}();