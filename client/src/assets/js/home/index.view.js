'use strict'

var IndexView = function () {

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

    var _showTodoSection = function (value) {
        if (typeof (value) != "undefined" && !value) {
            $(_elements.todoSection.id).hide();
            _elements.todoSection.visible = false;
            return;
        }
        $(_elements.todoSection.id).show();
        _elements.todoSection.visible = true;
    }

    var _showGoToLoginSection = function (value) {
        if (typeof (value) != "undefined" && !value) {
            $(_elements.goToLoginSection.id).hide();
            _elements.goToLoginSection.visible = false;
            return;
        }
        $(_elements.goToLoginSection.id).show();
        _elements.goToLoginSection.visible = true;
    }

    var _todoIsVisible = function () {
        return _elements.todoSection.visible;
    };

    var _goToLoginIsVisible = function () {
        return _elements.goToLoginSection.visible;
    };

    return {
        todoIsVisible: _todoIsVisible,
        goToLoginIsVisible: _goToLoginIsVisible,
        showTodoSection: _showTodoSection,
        showGoToLoginSection: _showGoToLoginSection
    };
};