require('../test_helper');

var Session = require('../../lib/session');
var ApiEndpoint = require('../../lib/api_endpoints/api_endpoint');

var ListResponses = require('../../lib/api_endpoints/list_responses');
var dossierId = "da8a45e5-7190-4c85-8377-c4d170d2e2c8";

describe('ListResponses', function(){


    var expected = 'return value';
    var listResponses = new ListResponses();
    var sessionStub = new Session();

    sinon.stub(sessionStub);
    sessionStub.get.callsArgWith(2, expected);
    listResponses.setSession(sessionStub);

    it('should be an api instance', function() {
        assert(listResponses instanceof ApiEndpoint);
    });

    it('Calls a GET with the correct parameters on the session', function(done){
        listResponses.execute(dossierId, function(result){
            assert(expected === result);
            done();
        });
    });
});