var request = require('supertest')('10.244.68.3:8500/');
var expect = require('chai').expect


describe('Describe', function(){
  it('registers a unique service and then checks that the service has been registered', function(done){
    var body =
    {
      "Datacenter": "dc1",
      "Node": "foobar",
      "Address": "192.168.10.10",
      "TaggedAddresses": {
        "lan": "192.168.10.10",
        "wan": "10.0.10.10"
      },
      "Service": {
        "ID": "HelloWorld",
        "Service": "HelloWorld",
        "Address": "127.0.0.1",
        "Port": 8000
      }
    }

    request
      .put('v1/catalog/register')
      .send(body).then(function(){
        request
          .get('v1/catalog/service/HelloWorld')
          .end(function(err, result){
            expect(result.body[0].ServiceID).to.equal(body.Service.ID);
            done();
          });
      });
  });
});
