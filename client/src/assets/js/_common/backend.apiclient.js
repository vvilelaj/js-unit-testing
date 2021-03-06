'use strict';

var BackendApiClient = () => {

    var _apiAuthLoginPost = (params) => {
        var dfd = $.Deferred();
        try {

            $.ajax({
                type: 'post',
                url: Constants.backedApiClient.baseUrl + Constants.backedApiClient.apiAuthLoginPost,
                datatype: 'json',
                contenttype: 'application/json; charset=utf-8',
                crossDomain: true,
                data: params,
                success: function (data) {
                    if (data.success) {
                        dfd.resolve(data);
                    }
                    else {
                        dfd.reject(data);
                    }
                },
                error: function (data, error) {
                    dfd.reject(data, error);
                }
            });

        } catch (e) {
            dfd.reject({}, {});
        }
        return dfd.promise();
    };

    return {
        apiAuthLoginPost: _apiAuthLoginPost
    };
};