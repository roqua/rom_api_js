require('./test_helper');

var Session = require('../lib/session');
var restservice = require('restler');

describe('Session', function(){
  var url = 'url';

  it('should set the correct rom settings (username and password', null);

  describe('#get', function(){
    var restGet = sinon.spy(restservice, 'get');
    var session = new Session(restservice);

    it('calls the rest library', function(){
      session.get(url, null, function(data) {
        // Stub the get
        assert(restGet.called);
        assert(restGet.calledWith(url));
      });
    });
  });

  describe('#post', function(){
    var restPost = sinon.spy(restservice, 'post');
    var session = new Session(restservice);
    it('calls the rest library', function() {
      session.post(url, null, function(data) {
        assert(restPost.called);
        assert(restPost.calledWith(url));
      });
    });
  });

  describe('#delete', function(){

  });

});
