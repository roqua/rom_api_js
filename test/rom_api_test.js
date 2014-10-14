require('./test_helper');

var RomApi = require('../lib/rom_api');
var ListProtocolSubscriptions = require('../lib/api_endpoints/list_protocol_subscriptions');
var ListResponses = require('../lib/api_endpoints/list_responses');

describe('RomApi', function(){
   describe('ApiEndpoints', function() {
       it('should provide a listProtocolSubscriptions instance', function() {
           rom_api = new RomApi();
           assert(rom_api.listProtocolSubscriptions !== undefined);
           assert(rom_api.listProtocolSubscriptions instanceof ListProtocolSubscriptions);
       });

       it('should provide a listResponses instance', function() {
           rom_api = new RomApi();
           assert(rom_api.listResponses !== undefined);
           assert(rom_api.listResponses instanceof ListResponses);
       });
   });
});
