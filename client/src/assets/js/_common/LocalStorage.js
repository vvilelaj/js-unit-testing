var LocalStorage = function () {

    if (typeof (config) == "undefined" || config == null) throw "config is null or undefined";
    if (typeof (config.view) == "undefined" || config.view == null) throw "config.view is null or undefined";

    var _config = {
        view : config.view
    };

    
    return {
        view : _config.view
    };
};