var ApiEndpoint = require('./api_endpoint');

ListProtocolSubscriptions.prototype = new ApiEndpoint();
ListProtocolSubscriptions.prototype.constructor = ListProtocolSubscriptions;
function ListProtocolSubscriptions() {
}

ListProtocolSubscriptions.prototype.execute = function (dossier_id, callback) {
    this.session.get("/dossiers/" + dossier_id + "/protocol_subscriptions", null, callback);
};

module.exports = ListProtocolSubscriptions;

