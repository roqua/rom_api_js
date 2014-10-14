var ApiEndpoint = require('./api_endpoint');

ListResponses.prototype = new ApiEndpoint();
ListResponses.prototype.constructor = ListResponses;
function ListResponses() {
}

ListResponses.prototype.execute = function (dossier_id, callback) {
    this.session.get("/dossiers/" + dossier_id + "/responses", null, callback);
};

module.exports = ListResponses;