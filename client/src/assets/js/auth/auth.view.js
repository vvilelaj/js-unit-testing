'use strict'

var AuthView = function () {

    var _elements = {
        username: {
            id: '#username',
            text: ''
        },
        usernameRequiredMessage: {
            id: '#username-required-message',
            visible: false
        },
        password: {
            id: '#password',
            text: ''
        },
        passwordRequiredMessage: {
            id: '#password-required-message',
            visible: false
        },
        loginErrorMesage: {
            id: '#login-error-message',
            visible: false,
            text: ''
        },
        login: {
            id: '#login',
            onClickEventHandler: null
        },

    }

    var _usernameText = function (value) {
        if (typeof (value) == "undefined")
            return $(_elements.username.id).val() || _elements.username.text || '';

        _elements.username.text = value;
        $(_elements.username.id).val(value);
    };

    var _usernameRequiredMessageVisible = function (value) {
        if (typeof (value) == "undefined")
            return _elements.usernameRequiredMessage.visible;

        _elements.usernameRequiredMessage.visible = value;
        if (value) $(_elements.usernameRequiredMessage.id).show();
        if (!value) $(_elements.usernameRequiredMessage.id).hide();
    };

    var _passwordText = function (value) {
        if (typeof (value) == "undefined")
            return $(_elements.password.id).val() || _elements.password.text  || '';

        _elements.password.text = value;
        $(_elements.password.id).val(value);
    };

    var _passwordRequiredMessageVisible = function (value) {
        if (typeof (value) == "undefined")
            return _elements.passwordRequiredMessage.visible;

        _elements.passwordRequiredMessage.visible = value;

        if (value) $(_elements.passwordRequiredMessage.id).show();
        if (!value) $(_elements.passwordRequiredMessage.id).hide();
    };

    var _loginErrorMessageVisible = function (value) {
        if (typeof (value) == "undefined")
            return _elements.loginErrorMesage.visible;

        _elements.loginErrorMesage.visible = value;

        if (value)
            $(_elements.loginErrorMesage.id).show();

        if (!value)
            $(_elements.loginErrorMesage.id).hide();
    };

    var _errorMessageText = function (value) {
        if (typeof (value) == "undefined")
            return $(_elements.loginErrorMesage.id).val() || _elements.loginErrorMesage.text  || '';

        _elements.loginErrorMesage.text = value;
        $(_elements.loginErrorMesage.id).text(value);
    };

    var _onLoginClickedEventHandler = function (value) {
        if (typeof (value) == "undefined")
            return _elements.login.onClickEventHandler;

        _elements.login.onClickEventHandler = value;
        $(_elements.login.id).on('click', value);
    };

    return {
        username: {
            text: _usernameText,
        },
        usernameRequiredMessage: {
            visible: _usernameRequiredMessageVisible,
        },
        password: {
            text: _passwordText,
        },
        passwordRequiredMessage: {
            visible: _passwordRequiredMessageVisible,
        },
        loginErroMessage: {
            visible: _loginErrorMessageVisible,
            text: _errorMessageText,
        },
        login: {
            onClickEventHandler: _onLoginClickedEventHandler
        }
    };
};