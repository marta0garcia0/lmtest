describe("Http", function() {
  	var Http = require('../../public/scripts/Http');
	var http;
  	beforeEach(function() {
    	http = new Http();
    });
 	it("should be able to do a request", function() {
    	spyOn(http, "makeRequest").and.callFake(function(){});
    	http.makeRequest("a","b","c");
    	expect(http.makeRequest).toHaveBeenCalledWith("a","b","c");
	});
});
