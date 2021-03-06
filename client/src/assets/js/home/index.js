var homeView = HomeView ();
var homePresenter = HomePresenter({
    view: homeView,
    localStorage: LocalStorage()
});


$(document).ready(function () {
    homePresenter.init();
});