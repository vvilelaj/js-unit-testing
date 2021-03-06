'use strict'

var HomeView = function () {

    var _elements = {
        todoSection: {
            id: '#todo',
            visible: false
        },
        goToLoginSection: {
            id: '#go-to-login',
            visible: false
        }
    }

    var _todoSectionVisible = function (value) {
        if (typeof (value) == "undefined")
            return _elements.todoSection.visible;

        _elements.todoSection.visible = value;
        if (value) $(_elements.todoSection.id).show();
        if (!value) $(_elements.todoSection.id).hide();
    };

    var _goToLoginSectionVisible = function (value) {
        if (typeof (value) == "undefined")
            return _elements.goToLoginSection.visible;

        _elements.goToLoginSection.visible = value;
        if (value) $(_elements.goToLoginSection.id).show();
        if (!value) $(_elements.goToLoginSection.id).hide();
    };

    return {
        todoSection:{
            visible : _todoSectionVisible
        },
        goToLoginSection:{
            visible : _goToLoginSectionVisible
        }
    };
};