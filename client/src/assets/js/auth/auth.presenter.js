'use strict';

var AuthPresenter = function (config) {

    if (typeof (config) == "undefined" || config == null) throw "config is null or undefined";
    if (typeof (config.view) == "undefined" || config.view == null) throw "config.view is null or undefined";
    if (typeof (config.localStorage) == "undefined" || config.localStorage == null) throw "config.localStorage is null or undefined";
    if (typeof (config.backendApiClient) == "undefined" || config.backendApiClient == null) throw "config.backendApiClient is null or undefined";

    var _config = {
        view: config.view,
        localStorage: config.localStorage,
        backendApiClient: config.backendApiClient,
    };

    var _onLoginClicked = function (e) {
        e.preventDefault();

        _config.view.usernameRequiredMessage.visible(false);
        _config.view.passwordRequiredMessage.visible(false);

        if (_config.view.username.text() == '') {
            _config.view.usernameRequiredMessage.visible(true);
            return;
        }

        if (_config.view.password.text() == '') {
            _config.view.passwordRequiredMessage.visible(true);
            return;
        }

        var params = {
            username: _config.view.username.text(),
            password: _config.view.password.text()
        };

        _config.backendApiClient
            .apiAuthLoginPost(params)
            .done((data) => {
                if (!data.success) {
                    _config.view.loginErroMessage.text(data.message);
                    _config.view.loginErroMessage.visible(true);
                    return;
                }
                _config.view.loginErroMessage.text('');
                _config.view.loginErroMessage.visible(false);

                _config.localStorage.setItem(Constants.localStorageKey.isUserLoggedIn, true);
                _config.localStorage.setItem(Constants.localStorageKey.userData, data.data);
            })
            .fail((data, error) => {
                console.log(data, error);
                _config.view.loginErroMessage.text('Error : Please reach out to the admin.');
                _config.view.loginErroMessage.visible(true);
            });
    };

    var _init = function () {
        _config.view.username.text('');
        _config.view.password.text('');
        _config.view.login.onClickEventHandler(_onLoginClicked);
    };

    return {
        init: _init,
        onLoginClicked: _onLoginClicked
    };
};