
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
        var presenter = IndexPresenter(config);
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
        var presenter = IndexPresenter(config);
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
        var presenter = IndexPresenter(config);
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
        var presenter = IndexPresenter(config);
      } catch (error) {
        message = error;
      }

      // Assert
      expect(message).to.have.string("config.view is null or undefined");;

    });

  });

  describe('init', function () {

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

    it('Should message to log in when user is not logged in', () => {
      // Arrange

      // Act 

      // Assert

    });
  });

});