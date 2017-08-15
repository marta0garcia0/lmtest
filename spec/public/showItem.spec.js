var showItem = require('../../public/scripts/showItem');
describe("showItem", function() {
	var dis;
  	beforeEach(function() {
    	dis = showItem;
    });
   	it("should be able to display the hotel info", function() {
        expect(dis).not.toBeUndefined();
	  });
});
