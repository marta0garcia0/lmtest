var displayer = require('../../public/scripts/displayer');
var mockData = require('../../data/json/hotels');
describe("displayer", function() {
	var dis;
  	beforeEach(function() {
    	dis = displayer;
    });
   	it("should be able to display the hotel info", function() {
        expect(dis).not.toBeUndefined();
	  });
});
