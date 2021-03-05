'use strict'

var AuthView = function () {

    var _elements = {
        username: {
            id: '#username',
            text: ''
        },
        password: {
            id: '#password',
            text: ''
        },
        login: {
            id: '#login',
            onClickEventHandler: null
        },

    }

    var _username = function (value) {
        if (typeof (value) == "undefined")
            return _elements.username.text;

        _elements.username.text = value;
        $(_elements.username.id).val(value);
    };

    var _password = function (value) {
        if (typeof (value) == "undefined")
            return _elements.password.text;

        _elements.password.text = value;
        $(_elements.password.id).val(value);
    };

    var _onLoginClickedEventHandler = function (value) {
        if (typeof (value) == "undefined")
            return _elements.login.onClickEventHandler;

        _elements.login.onClickEventHandler = value;
        $(_elements.password.id).on('click', value);
    };

    return {
        username: _username,
        password: _password,
        login: {
            onClickEventHandler: _onLoginClickedEventHandler
        }
    };
};