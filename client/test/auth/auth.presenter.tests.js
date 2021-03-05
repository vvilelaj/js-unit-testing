
'use strict';

describe('Auth - Auth Presenter', () => {
  describe('Constructor', () => {
    var message = ''
    before(() => {
      // runs once before the first test in this block
    });

    after(() => {
      // runs once after the last test in this block
    });

    beforeEach(() => {
      // runs before each test in this block
      message = '';
    });

    afterEach(() => {
      // runs after each test in this block
    });

    it('Should throw an error when config parameter is undefined', () => {
      // Act
      var config = undefined;

      // Arrange
      try {
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config is null or undefined");

    });

    it('Should throw an error when config parameter is null', () => {
      // Act
      var config = null;

      // Arrange
      try {
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config is null or undefined");;

    });

    it('Should throw an error when config.view parameter is undefined', () => {
      // Act
      var config = {
        view: undefined
      }

      // Arrange
      try {
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.view is null or undefined");;

    });

    it('Should throw an error when config.view parameter is null', () => {
      // Act
      var config = {
        view: null
      }

      // Arrange
      try {
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.view is null or undefined");;

    });

    it('Should throw an error when config.localStorage parameter is undefined', () => {
      // Act
      var config = {
        view: {},
        localStorage: undefined
      }

      // Arrange
      try {
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.localStorage is null or undefined");;

    });

    it('Should throw an error when config.localStorage parameter is null', () => {
      // Act
      var config = {
        view: {},
        localStorage: null
      }

      // Arrange
      try {
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.localStorage is null or undefined");;

    });

  });

  describe('init', () => {

    var message;
    var view;
    var presenter;
    var localStorage;

    before(() => {
      // runs once before the first test in this block

    });

    after(() => {
      // runs once after the last test in this block
    });

    beforeEach(() => {
      // runs before each test in this block
      message = '';
      view = AuthView();
      localStorage = LocalStorage();
      presenter = AuthPresenter({
        view: view,
        localStorage: localStorage
      });
    });

    afterEach(() => {
      // runs after each test in this block
      sinon.restore();
    });

    it('should show username field empty', () => {
      // Arrange
      view.username = sinon.stub();

      // Act
      presenter.init();

      // Assert
      expect(view.username.calledWith('')).to.equals(true);
    });

    it('should show password field empty', () => {
      // Arrange
      view.password = sinon.stub();

      // Act
      presenter.init();

      // Assert
      expect(view.password.calledWith('')).to.equals(true);
    });

    it('should add a handler to login button', () => {
      // Arrange
      view.login.onClickEventHandler = sinon.stub();

      // Act
      presenter.init();

      // Assert
      var handler = view.login.onClickEventHandler.getCall(0).args[0];
      expect(typeof handler).to.equals("function");
      expect(handler.name).to.have.string("onLoginClicked");
    });

  });

  describe('', () => {

  });

});