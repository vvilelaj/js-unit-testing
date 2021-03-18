'use strict';

var RegisterPresenter = function (config) {

    if (typeof (config) == "undefined" || config == null) throw "config is null or undefined";
    if (typeof (config.view) == "undefined" || config.view == null) throw "config.view is null or undefined";
    if (typeof (config.localStorage) == "undefined" || config.localStorage == null) throw "config.localStorage is null or undefined";

    var _config = {
        view: config.view,
        localStorage: config.localStorage
    };

    var _onLoginClicked = function (e) {

    };

    var _init = function () {
        _config.view.name('');
        _config.view.email('');
        _config.view.username('');
        _config.view.password('');
        _config.view.login.onClickEventHandler(_onLoginClicked);
    };

    return {
        init: _init
    };  
};