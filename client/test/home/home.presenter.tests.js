
'use strict';

describe('Home - Index Presenter', function () {
  describe('Constructor', function () {
    var message = ''
    before(function () {
      // runs once before the first test in this block
    });

    after(function () {
      // runs once after the last test in this block
    });

    beforeEach(function () {
      // runs before each test in this block
      message = '';
    });

    afterEach(function () {
      // runs after each test in this block
    });

    it('Should throw an error when config parameter is undefined', function () {
      // Act
      var config = undefined;

      // Arrange
      try {
        var presenter = HomePresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config is null or undefined");;

    });

    it('Should throw an error when config parameter is null', function () {
      // Act
      var config = null;

      // Arrange
      try {
        var presenter = HomePresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config is null or undefined");;

    });

    it('Should throw an error when config.view parameter is undefined', function () {
      // Act
      var config = {
        view: undefined
      }

      // Arrange
      try {
        var presenter = HomePresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.view is null or undefined");;

    });

    it('Should throw an error when config.view parameter is null', function () {
      // Act
      var config = {
        view: null
      }

      // Arrange
      try {
        var presenter = HomePresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.view is null or undefined");;

    });

    it('Should throw an error when config.localStorage parameter is undefined', function () {
      // Act
      var config = {
        view: {},
        localStorage: undefined
      }

      // Arrange
      try {
        var presenter = HomePresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.localStorage is null or undefined");;

    });

    it('Should throw an error when config.localStorage parameter is null', function () {
      // Act
      var config = {
        view: {},
        localStorage: null
      }

      // Arrange
      try {
        var presenter = HomePresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.localStorage is null or undefined");;

    });

  });

  describe('init', function () {

    var message;
    var view;
    var presenter;
    var localStorage;

    before(function () {
      // runs once before the first test in this block

    });

    after(function () {
      // runs once after the last test in this block
    });

    beforeEach(function () {
      // runs before each test in this block
      message = '';
      view = HomeView();
      localStorage = LocalStorage();
      presenter = HomePresenter({
        view: view,
        localStorage: localStorage
      });
    });

    afterEach(function () {
      // runs after each test in this block
      sinon.restore();
    });

    it('Should show message to log in when user is not logged', () => {
      // Arrange
      localStorage.getItem = sinon.stub();
      localStorage.getItem.withArgs(Constants.localStorageKey.isUserLoggedIn).returns(false);

      // Act 
      presenter.init();

      // Assert
      expect(view.todoSection.visible()).to.equals(false);
      expect(view.goToLoginSection.visible()).to.equals(true);
    });

    it('Should show message to todo section when user is logged', () => {
      // Arrange
      localStorage.getItem = sinon.stub();
      localStorage.getItem.withArgs(Constants.localStorageKey.isUserLoggedIn).returns(true);

      // Act 
      presenter.init();

      // Assert
      expect(view.todoSection.visible()).to.equals(true);
      expect(view.goToLoginSection.visible()).to.equals(false);
    });
  });

});