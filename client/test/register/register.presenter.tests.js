'use strict';
describe('register-presenter', function () {
    describe('init', function(){
        var message;
        var view;
        var presenter;
        var localStorage;

        beforeEach(function () {
            message = '';
            view = RegisterView();
            localStorage = LocalStorage();
            presenter = RegisterPresenter({
            view: view,
            localStorage: localStorage
            });
        });
    
        afterEach(function () {
            sinon.restore();
        });       

        // it('it should show the username entered', () => {
        //     view.username = 'gustavo';
        //     assert(view.username === 'gustavo') 
        //     //expect(view.username.calledWith('')).to.equals(true);
        // });
        it('should show name field empty', () => {
            view.username = sinon.stub();
            presenter.init();
            expect(view.name.calledWith('')).to.equals(true);
        });

        it('should show email field empty', () => {
            view.username = sinon.stub();
            presenter.init();
            expect(view.email.calledWith('')).to.equals(true);
        });

        it('should show username field empty', () => {
            view.username = sinon.stub();
            presenter.init();
            expect(view.username.calledWith('')).to.equals(true);
        });
    
        it('should show password field empty', () => {
            
            view.password = sinon.stub();
            presenter.init();
            expect(view.password.calledWith('')).to.equals(true);
        });
    
        it('should add a handler to login button', () => {
            
            view.login.onClickEventHandler = sinon.stub();
            presenter.init();
            expect(typeof view.login.onClickEventHandler.getCall(0).args[0]).to.equals("function");
        });
    });
});
