
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
        var presenter = AuthPresenter(config);
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
        var presenter = AuthPresenter(config);
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
        var presenter = AuthPresenter(config);
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
        var presenter = AuthPresenter(config);
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
        var presenter = AuthPresenter(config);
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
        var presenter = AuthPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.localStorage is null or undefined");;

    });

    it('Should throw an error when config.backendApiClient parameter is undefined', () => {
      // Act
      var config = {
        view: {},
        localStorage: {},
        backendApiClient: null
      }

      // Arrange
      try {
        var presenter = AuthPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.backendApiClient is null or undefined");

    });

    it('Should throw an error when config.backendApiClient parameter is null', () => {
      // Act
      var config = {
        view: {},
        localStorage: {},
        backendApiClient: null
      }

      // Arrange
      try {
        var presenter = AuthPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.backendApiClient is null or undefined");;

    });
  });

  describe('init', () => {

    var message;
    var view;
    var presenter;
    var localStorage;
    var backendApiClient;

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
      backendApiClient = BackendApiClient();
      presenter = AuthPresenter({
        view: view,
        localStorage: localStorage,
        backendApiClient: backendApiClient
      });
    });

    afterEach(() => {
      // runs after each test in this block
      sinon.restore();
    });

    it('should show username field empty', () => {
      // Arrange

      // Act
      presenter.init();

      // Assert
      expect(view.username.text()).to.equals('');
    });

    it('should show password field empty', () => {
      // Arrange

      // Act
      presenter.init();

      // Assert
      expect(view.password.text()).to.equals('');
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

  describe('login.onClickEventHandler', () => {
    var message;
    var view;
    var presenter;
    var localStorage;
    var backendApiClient;

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
      backendApiClient = BackendApiClient();
      presenter = AuthPresenter({
        view: view,
        localStorage: localStorage,
        backendApiClient: backendApiClient
      });
    });

    afterEach(() => {
      // runs after each test in this block
      sinon.restore();
    });


    it('should show a username required message when user clicks login button and username is empty', () => {
      // Arrange
      var event = { preventDefault: sinon.stub() };

      // Act
      presenter.onLoginClicked(event);

      // Assert
      expect(event.preventDefault.called).to.equals(true);
      expect(view.usernameRequiredMessage.visible()).to.equals(true);
    });

    it('should show a password required message when user clicks login button and password is empty', () => {
      // Arrange
      var event = { preventDefault: sinon.stub() };
      view.username.text('any value');

      // Act
      presenter.onLoginClicked(event);

      // Assert
      expect(event.preventDefault.called).to.equals(true);
      expect(view.passwordRequiredMessage.visible()).to.equals(true);
    });

    it('should hide the username required message when user clicks login button and username is not empty', () => {
      // Arrange
      var event = { preventDefault: sinon.stub() };
      view.username.text('a-valid-value');

      // Act
      presenter.onLoginClicked(event);

      // Assert
      expect(event.preventDefault.called).to.equals(true);
      expect(view.usernameRequiredMessage.visible()).to.equals(false);
    });

    it('should hide the password required message when user clicks login button and password is not empty', () => {
      // Arrange
      var event = { preventDefault: sinon.stub() };
      view.password.text('a-valid-value');

      // Act
      presenter.onLoginClicked(event);

      // Assert
      expect(event.preventDefault.called).to.equals(true);
      expect(view.passwordRequiredMessage.visible()).to.equals(false);
    });

    it('should show a error message when the api responds back an error', () => {
      // Arrange
      var event = { preventDefault: sinon.stub() };
      backendApiClient.apiAuthLoginPost = sinon.stub();
      backendApiClient.apiAuthLoginPost
        .usingPromise($.Deferred())
        .resolves({ success: false, message: 'a message' });
      view.username.text('a-username');
      view.password.text('a-password');

      // Act 
      presenter.onLoginClicked(event);

      // Assert
      expect(event.preventDefault.called).to.equals(true);
      expect(view.loginErroMessage.visible()).to.equals(true);
      expect(view.loginErroMessage.text()).to.equals('a message');
    });

    it('should write in localstorage when the api responds back ok', () => {
      // Arrange
      var event = { preventDefault: sinon.stub() };
      //
      backendApiClient.apiAuthLoginPost = sinon.stub();
      backendApiClient.apiAuthLoginPost
        .usingPromise($.Deferred())
        .resolves({
          success: true,
          data: {
            username: 'a-username',
            email : 'a-email',
            name : 'a-name',
            lastname : 'a-lastname',
          }
        });
      //
      view.username.text('a-username');
      view.password.text('a-password');

      // Act 
      presenter.onLoginClicked(event);

      // Assert
      expect(event.preventDefault.called).to.equals(true);
      expect(view.loginErroMessage.visible()).to.equals(false);
      expect(localStorage.getItem(Constants.localStorageKey.isUserLoggedIn)).to.equals(true);
    });

  });

});