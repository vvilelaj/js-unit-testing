var indexView = IndexView();
var indexPresenter = IndexPresenter({
    view: indexView,
    localStorage: LocalStorage()
});


$(document).ready(function () {
    indexPresenter.init();
});