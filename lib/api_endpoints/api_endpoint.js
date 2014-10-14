var Session = require('./../session');
var session = new Session();

function ApiEndpoint() {
}

ApiEndpoint.prototype.session = session;

ApiEndpoint.prototype.setSession = function (session) {
    ApiEndpoint.prototype.session = session;
};

ApiEndpoint.prototype.execute = function (session, callback) {
    console.warn('Execute function should be overridden.');
};

module.exports = ApiEndpoint;