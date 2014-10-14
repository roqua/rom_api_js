require('../test_helper');

var Session = require('../../lib/session');
var ApiEndpoint = require('../../lib/api_endpoints/api_endpoint');

var ListProtocolSubscriptions = require('../../lib/api_endpoints/list_protocol_subscriptions');
var dossierId = "da8a45e5-7190-4c85-8377-c4d170d2e2c8";

describe('ListProtocolSubscriptions', function(){
    var expected = 'return value';
    var listProtocolSubscriptions = new ListProtocolSubscriptions();
    var sessionStub = new Session();

    sinon.stub(sessionStub);
    sessionStub.get.callsArgWith(2, expected);
    listProtocolSubscriptions.setSession(sessionStub);

    it('should be an api instance', function() {
        assert(listProtocolSubscriptions instanceof ApiEndpoint);
    });

    it('calls the rest library', function(done){
        listProtocolSubscriptions.execute(dossierId, function(result) {
            assert(result === expected);
            done();
        });
    });
});
