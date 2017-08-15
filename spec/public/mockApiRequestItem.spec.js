var  Http = require('../../public/scripts/mockApiRequestItem');
var mockApiRequestList = require('../../public/scripts/mockApiRequestList');
describe("Http", function() {
    var mockApiRequestItem = require('../../public/scripts/mockApiRequestItem');
    beforeEach(function() {
        http = new Http();
    });
   	it("should be able to list the hotel items", function() {
        var a= mockApiRequestList();
	  });
});
