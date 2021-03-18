'use strict'

var RegisterView= function(){
    var _elements={
        name: {
            id: '#name',
            text: ''
        },
        email:{
            id:'#email',
            text: ''
        },
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
    var _name = function(value){
        if(typeof(value)== "undefined")
            return _elements.name.text;

        _elements.name.text = value;
        $(_elements.name.id).value(value);
    };

    var _email = function(value){
        if(typeof(value)== "undefined")
            return _elements.email.text;

        _elements.email.text = value;
        $(_elements.email.id).value(value);
    };

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

    return{
        name: _name,
        email: _email,
        username: _username,
        password: _password,
        login: {
            onClickEventHandler: _onLoginClickedEventHandler
        }
    };

};