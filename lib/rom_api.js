function RomApi() {
}

var ListProtocolSubscriptions = require('./api_endpoints/list_protocol_subscriptions');
var ListResponses = require('./api_endpoints/list_responses');

var listProtocolSubscriptions = new ListProtocolSubscriptions();
var listResponses = new ListResponses();

RomApi.prototype.listResponses = listResponses;
RomApi.prototype.listProtocolSubscriptions = listProtocolSubscriptions;

module.exports = RomApi;