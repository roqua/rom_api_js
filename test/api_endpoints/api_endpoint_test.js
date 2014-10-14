require('../test_helper');

var ApiEndpoint = require('../../lib/api_endpoints/api_endpoint');
var Session     = require('../../lib/session');

describe('ApiEndpoint', function(){
    var apiEndpoint = new ApiEndpoint();
    it('provides a session', function(){
        assert(apiEndpoint.session !== undefined);
        assert(apiEndpoint.session instanceof Session);
    });
});