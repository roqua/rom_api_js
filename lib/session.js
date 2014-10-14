var RestService = require('restler');
var BasicAuthSettings = require('./basic_auth_settings');
var api_appendix = "/api/v1";

var restService;
var basicAuthSettings = new BasicAuthSettings();
function Session(RestService) {
    this.RestService = RestService || require('restler');

    var defaults = {};
    defaults.username = basicAuthSettings.getUsername();
    defaults.password = basicAuthSettings.getPassword();
    restService = new this.RestService.Service(defaults);
}

Session.prototype.get = function (path, params, callback) {
    restService.get(getPath(path), null).on('complete', function (result) {
        callback(result);
    });
};

Session.prototype.post = function (path, params, callback) {
    restService.post(getPath(path), params).on('complete', function (result) {
        callback(result);
    });
};

Session.prototype.delete = function () {
};
Session.prototype.patch = function () {
};
Session.prototype.put = function () {
};

var getPath = function(path) {
    return basicAuthSettings.getBaseUrl() + api_appendix + path
};

module.exports = Session;