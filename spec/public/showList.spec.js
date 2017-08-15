var showList = require('../../public/scripts/showList');
describe("showList", function() {
	var dis;
  	beforeEach(function() {
    	dis = showList;
    });
   	it("should be able to display the hotel info", function() {
        expect(dis).not.toBeUndefined();
	  });
});
