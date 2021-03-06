var authView = AuthView();
var authPresenter = AuthPresenter({
    view: authView,
    localStorage: LocalStorage(),
    backendApiClient: BackendApiClient()
});


$(document).ready(function () {
    authPresenter.init();
});